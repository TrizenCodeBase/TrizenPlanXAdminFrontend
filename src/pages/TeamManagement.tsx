
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  Users, 
  Edit, 
  Trash2, 
  Settings,
  Building
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Team {
  id: string;
  name: string;
  description: string;
  department: string;
  memberCount: number;
  manager: string;
  members: string[];
  color: string;
  createdDate: string;
}

const TeamManagement = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    department: '',
    manager: ''
  });

  const [teams] = useState<Team[]>([
    {
      id: '1',
      name: 'Frontend Development',
      description: 'Responsible for user interface and user experience development',
      department: 'Engineering',
      memberCount: 8,
      manager: 'Alice Cooper',
      members: ['Alice Cooper', 'Bob Martin', 'Carol Davis'],
      color: 'bg-blue-500',
      createdDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Backend Development',
      description: 'Handles server-side logic and database management',
      department: 'Engineering',
      memberCount: 6,
      manager: 'David Lee',
      members: ['David Lee', 'Eva Johnson'],
      color: 'bg-green-500',
      createdDate: '2024-01-10'
    },
    {
      id: '3',
      name: 'Product Design',
      description: 'Creates user-centered designs and prototypes',
      department: 'Design',
      memberCount: 4,
      manager: 'Sarah Wilson',
      members: ['Sarah Wilson', 'Mike Brown'],
      color: 'bg-purple-500',
      createdDate: '2024-01-20'
    },
    {
      id: '4',
      name: 'Digital Marketing',
      description: 'Manages online marketing campaigns and social media',
      department: 'Marketing',
      memberCount: 5,
      manager: 'Lisa Garcia',
      members: ['Lisa Garcia', 'Tom Jones'],
      color: 'bg-pink-500',
      createdDate: '2024-01-08'
    }
  ]);

  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance'];

  const handleCreateTeam = () => {
    if (!newTeam.name || !newTeam.department) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Team Created",
      description: `${newTeam.name} team has been created successfully.`,
    });

    setNewTeam({ name: '', description: '', department: '', manager: '' });
    setIsCreateDialogOpen(false);
  };

  const handleDeleteTeam = (teamId: string) => {
    toast({
      title: "Team Deleted",
      description: "Team has been removed successfully.",
      variant: "destructive",
    });
  };

  const teamStats = {
    totalTeams: teams.length,
    totalMembers: teams.reduce((sum, team) => sum + team.memberCount, 0),
    departments: [...new Set(teams.map(team => team.department))].length,
    averageSize: Math.round(teams.reduce((sum, team) => sum + team.memberCount, 0) / teams.length)
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Organize and manage teams across your organization
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Teams</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teamStats.totalTeams}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Members</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teamStats.totalMembers}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Departments</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teamStats.departments}</p>
              </div>
              <Building className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Team Size</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{teamStats.averageSize}</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Teams Grid */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Teams</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Team</DialogTitle>
              <DialogDescription>
                Add a new team to your organization
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="teamName">Team Name *</Label>
                <Input
                  id="teamName"
                  value={newTeam.name}
                  onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                  placeholder="Enter team name"
                />
              </div>
              <div>
                <Label htmlFor="teamDescription">Description</Label>
                <Textarea
                  id="teamDescription"
                  value={newTeam.description}
                  onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                  placeholder="Enter team description"
                />
              </div>
              <div>
                <Label htmlFor="teamDepartment">Department *</Label>
                <select
                  id="teamDepartment"
                  value={newTeam.department}
                  onChange={(e) => setNewTeam({ ...newTeam, department: e.target.value })}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="teamManager">Team Manager</Label>
                <Input
                  id="teamManager"
                  value={newTeam.manager}
                  onChange={(e) => setNewTeam({ ...newTeam, manager: e.target.value })}
                  placeholder="Assign team manager"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={handleCreateTeam} className="flex-1">
                  Create Team
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${team.color}`}></div>
                  <div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {team.department}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteTeam(team.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {team.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Manager</span>
                  <span className="text-sm font-medium">{team.manager}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Members</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{team.memberCount}</span>
                    <div className="flex -space-x-2">
                      {team.members.slice(0, 3).map((member, index) => (
                        <Avatar key={index} className="h-6 w-6 border-2 border-white dark:border-gray-800">
                          <AvatarFallback className="text-xs">
                            {member.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {team.memberCount > 3 && (
                        <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            +{team.memberCount - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Created</span>
                  <span className="text-sm">{new Date(team.createdDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <Settings className="h-4 w-4 mr-2" />
                Manage Team
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
