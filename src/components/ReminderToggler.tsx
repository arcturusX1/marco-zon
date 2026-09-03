import { colors } from '@/styles/global';
import {
    cancelMealReminders,
    getScheduledReminders,
    requestPermissions,
    scheduleMealReminders,
    sendTestReminder,
} from '@/utils/notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const REMINDERS_KEY = 'remindersEnabled';

export default function ReminderToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const load = async () => {
      const val = await AsyncStorage.getItem(REMINDERS_KEY);
      setEnabled(val === 'true');
    };
    load();
  }, []);

  const toggle = async (value: boolean) => {
    if (value) {
      const granted = await requestPermissions();
      if (!granted) return;
      await scheduleMealReminders();
    } else {
      await cancelMealReminders();
    }
    setEnabled(value);
    await AsyncStorage.setItem(REMINDERS_KEY, value.toString());
  };

  const testNow = async () => {
    const id = await sendTestReminder(5);
    if (!id) {
      Toast.show({ type: 'error', text1: 'Notification permission denied' });
      return;
    }
    console.log('Scheduled reminders:', await getScheduledReminders());
    Toast.show({ type: 'success', text1: 'Test reminder in 5s' });
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Meal Reminders</Text>
        <Switch
          value={enabled}
          onValueChange={toggle}
          trackColor={{ false: colors.surface, true: colors.primary }}
        />
      </View>

      {__DEV__ && (
        <Pressable style={styles.testButton} onPress={testNow}>
          <Text style={styles.testLabel}>Send test reminder (5s)</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  label: {
    color: colors.text,
    fontSize: 16,
  },
  testButton: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
  },
  testLabel: {
    color: colors.primary,
    fontSize: 14,
  },
});
