import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Download, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle,
  Calendar,
  Target
} from 'lucide-react';

const Analytics = () => {
  const taskStatusData = [
    { name: 'Completed', value: 187, color: '#22c55e' },
    { name: 'In Progress', value: 93, color: '#3b82f6' },
    { name: 'Review', value: 45, color: '#8b5cf6' },
    { name: 'Todo', value: 67, color: '#6b7280' }
  ];

  const productivityData = [
    { month: 'Jan', tasks: 145, completed: 123 },
    { month: 'Feb', tasks: 167, completed: 142 },
    { month: 'Mar', tasks: 189, completed: 165 },
    { month: 'Apr', tasks: 203, completed: 187 },
    { month: 'May', tasks: 234, completed: 215 },
    { month: 'Jun', tasks: 267, completed: 234 }
  ];

  const teamPerformanceData = [
    { team: 'Engineering', completed: 89, total: 102 },
    { team: 'Design', completed: 67, total: 73 },
    { team: 'Marketing', completed: 45, total: 52 },
    { team: 'Sales', completed: 34, total: 38 },
    { team: 'HR', completed: 23, total: 27 }
  ];

  const weeklyActivityData = [
    { day: 'Mon', tasks: 23, hours: 42 },
    { day: 'Tue', tasks: 31, hours: 55 },
    { day: 'Wed', tasks: 28, hours: 48 },
    { day: 'Thu', tasks: 35, hours: 62 },
    { day: 'Fri', tasks: 29, hours: 51 },
    { day: 'Sat', tasks: 12, hours: 18 },
    { day: 'Sun', tasks: 8, hours: 12 }
  ];

  const topPerformers = [
    { name: 'Alice Cooper', tasksCompleted: 34, efficiency: 95 },
    { name: 'Bob Martin', tasksCompleted: 29, efficiency: 87 },
    { name: 'Carol Davis', tasksCompleted: 26, efficiency: 92 },
    { name: 'David Lee', tasksCompleted: 23, efficiency: 84 },
    { name: 'Eva Johnson', tasksCompleted: 21, efficiency: 89 }
  ];

  const handleExportReport = async (format: string) => {
    console.log(`Exporting ${format} report...`);
    // Mock export functionality
    const { toast } = await import('@/hooks/use-toast');
    toast({
      title: `${format.toUpperCase()} Export Started`,
      description: "Your analytics report is being generated.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics & Reports</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Comprehensive insights into your organization's performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleExportReport('pdf')}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" onClick={() => handleExportReport('csv')}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">392</p>
                <div className="flex items-center text-sm mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+12%</span>
                </div>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">87.3%</p>
                <div className="flex items-center text-sm mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+5.2%</span>
                </div>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Response Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2.4h</p>
                <div className="flex items-center text-sm mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">-15min</span>
                </div>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                <div className="flex items-center text-sm mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-600">+8%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Task Status Distribution</CardTitle>
            <CardDescription>
              Current breakdown of task statuses across the organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {taskStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Productivity Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Productivity Trend</CardTitle>
            <CardDescription>
              Monthly task creation and completion rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="completed" 
                    stackId="1" 
                    stroke="#22c55e" 
                    fill="#22c55e" 
                    fillOpacity={0.3}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="tasks" 
                    stackId="2" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>
              Task completion rates by team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamPerformanceData.map((team, index) => {
                const percentage = Math.round((team.completed / team.total) * 100);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{team.team}</span>
                      <span className="text-sm text-gray-500">
                        {team.completed}/{team.total} ({percentage}%)
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>
              Daily task completion and hours logged
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tasks" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-yellow-600" />
            Top Performers
          </CardTitle>
          <CardDescription>
            Team members with highest task completion and efficiency rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    index === 2 ? 'bg-orange-600' : 'bg-blue-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{performer.name}</h4>
                    <p className="text-sm text-gray-500">{performer.tasksCompleted} tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {performer.efficiency}% efficiency
                  </Badge>
                  <div className="w-16">
                    <Progress value={performer.efficiency} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
