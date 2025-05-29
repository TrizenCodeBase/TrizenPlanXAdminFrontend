
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Shield, 
  CreditCard, 
  Palette,
  Database,
  Mail,
  Slack,
  Calendar
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Settings = () => {
  const [settings, setSettings] = useState({
    organizationName: 'Acme Corporation',
    organizationEmail: 'admin@acme.com',
    timezone: 'UTC-5',
    dateFormat: 'MM/DD/YYYY',
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    autoAssignment: false,
    slackIntegration: false,
    googleCalendar: true,
    dataRetention: '365',
    backupFrequency: 'daily'
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  const integrations = [
    {
      name: 'Slack',
      description: 'Connect with Slack for team notifications',
      icon: Slack,
      enabled: settings.slackIntegration,
      status: 'Connected'
    },
    {
      name: 'Google Calendar',
      description: 'Sync tasks and deadlines with Google Calendar',
      icon: Calendar,
      enabled: settings.googleCalendar,
      status: 'Connected'
    },
    {
      name: 'Email',
      description: 'Send email notifications and updates',
      icon: Mail,
      enabled: settings.emailNotifications,
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Configure your organization's preferences and integrations
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Organization Settings
              </CardTitle>
              <CardDescription>
                Basic information about your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={settings.organizationName}
                    onChange={(e) => setSettings({...settings, organizationName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="orgEmail">Organization Email</Label>
                  <Input
                    id="orgEmail"
                    type="email"
                    value={settings.organizationEmail}
                    onChange={(e) => setSettings({...settings, organizationEmail: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    value={settings.timezone}
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                    <option value="UTC+1">Central European Time (UTC+1)</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <select
                    id="dateFormat"
                    value={settings.dateFormat}
                    onChange={(e) => setSettings({...settings, dateFormat: e.target.value})}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
              <Button onClick={() => handleSave('Organization')}>
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                System Preferences
              </CardTitle>
              <CardDescription>
                Configure system-wide preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-assign Tasks</Label>
                  <p className="text-sm text-gray-500">Automatically assign tasks based on workload</p>
                </div>
                <Switch
                  checked={settings.autoAssignment}
                  onCheckedChange={(checked) => setSettings({...settings, autoAssignment: checked})}
                />
              </div>
              <Button onClick={() => handleSave('System Preferences')}>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-gray-500">Receive browser push notifications</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-gray-500">Receive weekly analytics reports</p>
                </div>
                <Switch
                  checked={settings.weeklyReports}
                  onCheckedChange={(checked) => setSettings({...settings, weeklyReports: checked})}
                />
              </div>
              <Button onClick={() => handleSave('Notifications')}>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Third-party Integrations
              </CardTitle>
              <CardDescription>
                Connect with external services and tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration, index) => {
                  const Icon = integration.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{integration.name}</h4>
                          <p className="text-sm text-gray-500">{integration.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={integration.enabled ? "default" : "outline"}>
                          {integration.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {integration.enabled ? 'Configure' : 'Connect'}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage security and data protection settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="dataRetention">Data Retention (days)</Label>
                <Input
                  id="dataRetention"
                  type="number"
                  value={settings.dataRetention}
                  onChange={(e) => setSettings({...settings, dataRetention: e.target.value})}
                />
                <p className="text-sm text-gray-500 mt-1">How long to keep deleted data</p>
              </div>
              <div>
                <Label htmlFor="backupFrequency">Backup Frequency</Label>
                <select
                  id="backupFrequency"
                  value={settings.backupFrequency}
                  onChange={(e) => setSettings({...settings, backupFrequency: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <Button onClick={() => handleSave('Security')}>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing & Subscription
              </CardTitle>
              <CardDescription>
                Manage your subscription and payment information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Current Plan: Enterprise</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  $99/month • Next billing: Feb 1, 2024
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Plan Features</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Unlimited users</li>
                    <li>• Advanced analytics</li>
                    <li>• Priority support</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Usage This Month</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active Users</span>
                      <span>1,247 / Unlimited</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Storage Used</span>
                      <span>45GB / 1TB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button>Upgrade Plan</Button>
                <Button variant="outline">View Invoices</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
