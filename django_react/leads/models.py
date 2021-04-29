from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django import forms
from phonenumber_field.modelfields import PhoneNumberField
import datetime
from multiselectfield import MultiSelectField
from annoying.fields import AutoOneToOneField
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

# Create your models here.

#class follows(models.Model):
#users foreign key
#user foreign key

#department data in profile and projects and teams should be parsed from department models
#change profile to users
#Posts will have postID, title, sourceID, dateCreated, with subclasses of: VideoPost, TextPost, ImagePost

#each subclass will have postID and each will have different rendered views

#follows will be userID and sourceID

#do we want users to be able to follow people?
#figure out how to do subclasses in django

#depart, proj, team, user need to all be a sub class of source model that has a source id,
#
#for if statements, if profile.exists(), if project.exists

#create 4 queries-->post.source.id = profile.source.id
# 4 different APIs with prof, proj,
#SETH THINKS GOOD HABIT TO ROUTE VERYTHING THRU HTML PAGE
# for feed, will need to post users id
# user id is passed through a variable in profile one
#put context in variables and pass through HTML page (For variables that react can;t get to, person who is currently logged in (request user id--> in django views request.user_id))
#add source object to profile, project, to call the source from profile side 

class Source(models.Model):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE, null=True, default=False, blank=True, related_name='+')
    project= models.ForeignKey('Project', on_delete=models.CASCADE, null=True, default=False, blank=True, related_name='+')
    team = models.ForeignKey('Team', on_delete=models.CASCADE, null=True, default=False, blank=True, related_name='+')
    department = models.ForeignKey('Department', on_delete=models.CASCADE, default=False, blank=True, null=True, related_name='+')

    def __str__(self):
        return str(self.id)



class Post(models.Model):
    sourceID = models.ForeignKey('Source', on_delete=models.CASCADE, related_name='+')
    image = models.ImageField(
        "Post Picture", upload_to='post_pics', blank=True, null=True)
    title = models.CharField(max_length=50)
    body = models.TextField()
    link = models.URLField(
        max_length=2000,
        blank=True
    )
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )
    def __str__(self):
        return str(self.sourceID)

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


# order: profile, project, posts, comments, messages, departments, friends, reactions, teams, AIADs

# PROFILE MODELS
# PROFILE MODELS
# PROFILE MODELS
class Profile(models.Model):
    user = AutoOneToOneField(User, on_delete=models.CASCADE)
    sourceID = models.ForeignKey('Source', on_delete=models.CASCADE, related_name='+', default='')
    followers = models.ForeignKey( 'Source', on_delete=models.CASCADE, related_name='+', default='')
    following = models.ForeignKey('Source', on_delete=models.CASCADE, related_name='+', default='')
    firstName = models.CharField(
        "First Name", max_length=25, null=False, blank=True, default="")
    lastName = models.CharField(
        "Last Name", max_length=25, null=False, blank=True, default="")
    # username = models.CharField(max_length=25, null=False, blank=False, unique=True, default=User.username)
    image = models.ImageField(
        "Profile Picture", default='default.jpg', upload_to='profile_pics', blank=True)
    email = models.EmailField(default="", blank=True,null=True)
    first = models.BooleanField(default=True, null=True)
    meetMe = models.TextField("Introduce Yourself!", null=True, blank=True, default="")
    dep_choice = (
        ('Behavioral Sciences and Leadership',
         ('Behavioral Sciences and Leadership')),
        ('Chemistry and Life Science', ('Chemistry and Life Science')),
        ('Civil and Mechanical Engineering', ('Civil and Mechanical Engineering')),
        ('Electrical Engineering and Comptuer Science',
         ('Electrical Engineering and Comptuer Science')),
        ('English and Philosophy', ('English and Philosophy')),
        ('Foreign Languages', ('Foreign Languages')),
        ('Geography and Environmental Engineering',
         ('Geography and Environmental Engineering')),
        ('History', ('History')),
        ('Law', ('Law')),
        ('Mathematical Sciences', ('Mathematical Sciences')),
        ('Physics and Nuclear Engineering', ('Physics and Nuclear Engineering')),
        ('Social Sciences', ('Social Sciences')),
        ('Systems Engineering', ('Systems Engineering')),
        ('Independent', ('Independent')),
    )
    Department = models.CharField( #should be models.OneToOneField(Department)
        max_length=50,
        choices=dep_choice,
        default='Independent',
        null=True
    )

    # title = models.CharField(max_length=30, null=False, blank=False)
    Major = models.CharField(max_length=50, null=True, blank=True, default="")
    Minor = models.CharField(max_length=50, null=True, blank=True, default="")
    interest = models.TextField("What Are Your Interests?", null=True, blank=True, default="")
    expertise = models.TextField(
        "Please list Your Areas of Expertise (separate by commas)", null=True, blank=True, default="")
    day = models.CharField(max_length=10, null=True, blank=True, default="")
    goalOne = models.TextField(
        "Please List One of Your Research Goals?", null=True, blank=True, default="")
    goalOneDesc = models.TextField(
        "Describe your first research goal", null=True, blank=True, default="")
    goalTwo = models.TextField(
        "Please List One of Your Research Goals?", null=True, blank=True, default="")
    goalTwoDesc = models.TextField(
        "Describe your second research goal", null=True, blank=True, default="")
    goalThree = models.TextField(
        "Please List One of Your Research Goals?", null=True, blank=True, default="")
    goalThreeDesc = models.TextField(
        "Describe your third research goal", null=True, blank=True, default="")
    skillOne = models.CharField(max_length=30, null=True, blank=True, default="")
    skillTwo = models.CharField(max_length=30, null=True, blank=True, default="")
    skillThree = models.CharField(max_length=30, null=True, blank=True, default="")
    skillFour = models.CharField(max_length=30, null=True, blank=True, default="")
    skillFive = models.CharField(max_length=30, null=True, blank=True, default="")
    look = (
        ('a research team to join.', ('an established Research Team')),
        ('a project to work on.', ('a fun project to work on')),
        ('faculty to work under.', ('a faculty mentor')),
        ('nothing at the moment.', ('nothing at the moment')),
        ('start project', ('to start a research project')),
        ('anyone who needs help.',
         ('the opportunity to help other people however I can')),
        ('cadets looking to do research for three or four years.',
         ('cadets interested in research that works towards a scholarship')),
        ('cadets who want to join a project.',
         ('cadets who want to join a project')),
        ('AIADs.', ('AIADs')),
    )
    # lookingFor = models.CharField(
    # max_length=75,
    # choices=look, lookOne, lookTwo,
    # default='nothing at the moment.',
    # )
    experienceOne = models.TextField(
        "Please List and Describe Your Experience", null=True, blank=True, default="")
    experienceTwo = models.TextField(
        "Please List and Describe Your Experience", null=True, blank=True, default="")
    experienceThree = models.TextField(
        "Please List and Describe Your Experience", null=True, blank=True, default="")
    experienceFour = models.TextField(
        "Please List and Describe Your Experience", null=True, blank=True, default="")
    experienceFive = models.TextField(
        "Please List and Describe Your Experience", null=True, blank=True, default="")
    areaInterestOne = models.TextField(
        "Please List and Describe Your Area of Interest", null=True, blank=True, default="")
    areaInterestTwo = models.TextField(
        "Please List and Describe Your Area of Interest", null=True, blank=True, default="")
    areaInterestThree = models.TextField(
        "Please List and Describe Your Area of Interest", null=True, blank=True, default="")

    lookingFor = MultiSelectField(
        "What Are You Currently Looking For?", choices=look, max_choices=3,null=True, blank=True, default="")
    faculty_cadet = (
        ('Faculty', ('Faculty')),
        ('Cadet', ('Cadet')),
    )

    title = models.CharField(
        max_length=50,
        choices=faculty_cadet,
        default='Cadet',
    )
    twitter = models.CharField(
        max_length=30, null=True, blank=True, default="@")
    # insta = models.CharField(max_length=30, null=False, blank=False)
    # facebook = models.CharField(max_length=30, null=False, blank=False)
    # linkedin = models.CharField(max_length=30, null=False, blank=False)
    # tictok = models.CharField(max_length=30, null=False, blank=False)

    gradYear = models.IntegerField(
        "Graduation Year", null=True, blank=True, default=2023)
    company = models.CharField(max_length=2, null=True, blank=True, default="")
    phone = PhoneNumberField(null=True, blank=True,
                             default='')  # , unique=True)
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)

    def add_notification(self, message):
        notification = Notification(user=self.user, message=message)
        notification.save()


class Project(models.Model):
    name = models.CharField(max_length=30)
    sourceID = models.ForeignKey('Source', on_delete=models.CASCADE, related_name='+')
    #owner = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    bPic = models.ImageField("Choose Your Project Banner Picture",
                             default='defaultproban.jpg', upload_to='project_banner')
    logo = models.ImageField("Choose Your Project Logo",
                             default='defaultlogo.jpg', upload_to='project_logo')
    dep_choice1 = (
        ('Behavioral Sciences and Leadership',
         ('Behavioral Sciences and Leadership')),
        ('Chemistry and Life Science', ('Chemistry and Life Science')),
        ('Civil and Mechanical Engineering', ('Civil and Mechanical Engineering')),
        ('Electrical Engineering and Comptuer Science',
         ('Electrical Engineering and Comptuer Science')),
        ('English and Philosophy', ('English and Philosophy')),
        ('Foreign Languages', ('Foreign Languages')),
        ('Geography and Environmental Engineering',
         ('Geography and Environmental Engineering')),
        ('History', ('History')),
        ('Law', ('Law')),
        ('Mathematical Sciences', ('Mathematical Sciences')),
        ('Physics and Nuclear Engineering', ('Physics and Nuclear Engineering')),
        ('Social Sciences', ('Social Sciences')),
        ('Systems Engineering', ('Systems Engineering')),
        ('Independent', ('Independent')),
    )
    department = models.CharField( #should be models.AutoOneToFieldOne(Department)
        max_length=50,
        choices=dep_choice1,
        default='Independent',
    )
    purpose = models.CharField(
        "Enter your project's purpose", max_length=50, null=True)
    description = models.TextField(
        "Please give a brief description of your project, progress, team, and goals.", null=True)
    tag_choice = (
        ('Data Analysis', ('Data Analysis')),
        ('3D Printing', ('3D Printing')),
        ('Robotics', ('Robotics')),
        ('Coding', ('Coding')),
        ('Science', ('Science')),
        ('Drones', ('Drones')),
        ('Math', ('Math')),
        ('Chemistry', ('Chemistry')),
        ('Nuclear Engineering', ('Nuclear Engineering')),
        ('Physics', ('Physics')),
        ('Photonics', ('Photonics')),
        ('MATLAB', ('MATLAB')),
        ('SolidWorks', ('SolidWorks')),
        ('Writing', ('Writing')),
        ('Graphic Design', ('Graphic Design')),
        ('Design', ('Design')),
        ('Robotics', ('Robotics')),
        ('Business', ('Business')),
        ('Stocks', ('Stocks')),
        ('Hacking', ('Hacking')),
        ('Law', ('Law Studies')),
        ('Coding', ('Coding')),
        ('Environmental', ('Environment')),
        ('Lifestyle', ('Lifestyle')),
        ('Kinesiology', ('Kinesiology')),
        ('Health', ('Health')),
        ('Sleep', ('Sleep')),
        ('Psychology', ('Psychology')),
        ('Material Science', ('Material Science')),
        ('Batteries', ('Batteries')),
        ('Energy', ('Energy')),
        ('Fiber Optics', ('Fiber Optics')),
        ('Space', ('Space')),
        ('Autonomous Vehicles', ('Autonomous Vehicles')),
        ('Biology', ('Biology')),
    )

    projectTag = MultiSelectField(
        "Choose Up To 5 Tags",
        choices=tag_choice,
        max_choices=5
    )

    look = (
        ('Expert Cadets.', ('motivated cadets with niche expertise.')),
        ('Any cadet who wants to help.', ('cadets who want to learn and help.')),
        ('an engineering cadet.', ('an engineering Cadet')),
        ('a cadet with a scientific background.',
         ('a cadet with a scientific background')),
        ('cadets with programming experience.',
         ('cadets with programming experience')),
        ('Stem interests.', ('cadets with an interest in STEM.')),
        ('scholarship', ('cadets seeking scholarships from research')),
        ('a lot of work.', ('cadets who can work 10-20 hours a week')),
        ('anyone', ('anyone!')),
        ('Nothing', ('nothing at the moment')),
    )

    lookingFor = MultiSelectField(
        "What Does This Project Need",
        choices=look,
        max_choices=5
    )

    recruit = (
        ('Yes', ('Yes')),
        ('No', ('No')),
    )

    recruiting = models.CharField(
        "Is This Project Currently Recruiting?",
        max_length=50,
        choices=recruit,
        default='Yes',
    )
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )

    class Meta:
        verbose_name_plural = "projects"

    def __str__(self):
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=30)
    sourceID = AutoOneToOneField('Source', on_delete=models.CASCADE, related_name='+', default=0)
    mission = models.CharField(max_length=100)
    departmentHead = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="departmentHead")
    deputyHead = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="deputyHead")
    dac = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="DAC")
    depBanner = models.ImageField(
        default='', blank=True, upload_to='department_banner')
    depLogo = models.ImageField(
        default='', blank=True, upload_to='department_logo')
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )

    def __str__(self):
        return self.name


class Team(models.Model):
    name = models.CharField(max_length=30)
    sourceID = models.ForeignKey('Source', on_delete=models.CASCADE, related_name='+')
    #owner = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
    bPic = models.ImageField(default='defaultproban.jpg',
                             upload_to='project_banner')
    logo = models.ImageField(default='defaultlogo.jpg',
                             upload_to='project_logo')
    dep_choice1 = (
        ('Behavioral Sciences and Leadership',
         ('Behavioral Sciences and Leadership')),
        ('Chemistry and Life Science', ('Chemistry and Life Science')),
        ('Civil and Mechanical Engineering', ('Civil and Mechanical Engineering')),
        ('Electrical Engineering and Comptuer Science',
         ('Electrical Engineering and Comptuer Science')),
        ('English and Philosophy', ('English and Philosophy')),
        ('Foreign Languages', ('Foreign Languages')),
        ('Geography and Environmental Engineering',
         ('Geography and Environmental Engineering')),
        ('History', ('History')),
        ('Law', ('Law')),
        ('Mathematical Sciences', ('Mathematical Sciences')),
        ('Physics and Nuclear Engineering', ('Physics and Nuclear Engineering')),
        ('Social Sciences', ('Social Sciences')),
        ('Systems Engineering', ('Systems Engineering')),
        ('Independent', ('Independent')),
    )
    department = models.CharField(
        max_length=50,
        choices=dep_choice1,
        default='Independent',
    )
    description = models.CharField(max_length=50, null=True)
    purpose = models.TextField()
    tag_choice = (
        ('Data Analysis', ('Data Analysis')),
        ('3D Printing', ('3D Printing')),
        ('Robotics', ('Robotics')),
        ('Coding', ('Coding')),
        ('Aerodynamics', ('Aerodynamics')),
    )

    projectTag = models.CharField(
        max_length=32,
        choices=tag_choice,
        default='Coding',
    )

    look = (
        ('motivated cadets with niche expertise.', ('Expert Cadets')),
        ('cadets who want to learn and help.', ('Any cadet who wants to help')),
        ('an engineering cadet.', ('Engineering Cadet')),
        ('a cadet with a scientific background.', ('Scientific background')),
        ('cadets with programming experience.', ('Coding Background')),

    )

    lookingFor = models.CharField(
        max_length=75,
        choices=look,
        default='an engineering cadet,',
    )

    recruit = (
        ('Yes', ('Yes')),
        ('No', ('No')),
    )

    recruiting = models.CharField(
        max_length=50,
        choices=recruit,
        default='Yes',
    )
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )

    class Meta:
        verbose_name_plural = "teams"

    def __str__(self):
        return self.name


class AIAD(models.Model):
    name = models.CharField(max_length=50, null=False)
    img = models.ImageField(default='', blank=True, upload_to='AIAD')
    link = models.URLField(
        max_length=2000,
        blank=True
    )
    mission = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    statusOptions = (
        ('Active', ('Active')),
        ('Archived', ('Archived')),
        ('Deleted', ('Deleted')),
    )

    status = models.CharField(
        max_length=50,
        choices=statusOptions,
        default='Active',
    )

    def __str__(self):
        return self.name


class MemberList(models.Model):
    members = models.CharField(max_length=2000)

    def __str__(self):
        return self.members


class Member(models.Model):
    memberlist = models.ManyToManyField(MemberList)
    username = models.CharField(max_length=50, null=True)
    email = forms.EmailField()
    text = models.CharField(max_length=300)
    is_admin = models.BooleanField(null=True)
    admins = models.ManyToManyField(User, limit_choices_to={'is_admin': True})

    def __str__(self):
        return self.text



class uProjects(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="u")
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="uProj")
    ifAccepted = models.BooleanField(null=True, blank=False, default=False)
    #ifLeader = models.BooleanField(null = False, blank=False)
    ifAdmin = models.BooleanField(
        "Do you want this user to be a project Admin?", null=True, blank=False, default=False)
    title = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.user.username + ',' + self.project.name


# DEPARTMENT VIEWS
# DEPARTMENT VIEWS
# DEPARTMENT VIEWS


class uDepartment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + ',' + self.department.name


class projDepartment(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.project.name + ',' + self.department.name

# USERS m


# NOTIFICATION MODELS
# NOTIFICATION MODELS
# NOTIFICATION MODELS
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=200, default='notification')
    url = models.URLField(null='', blank='', default='')
    ifViewed = models.BooleanField(null=False, default=False)
    ifAccepted = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.message


# POSTS MODELS
# POSTS MODELS
# POSTS MODELS


class uPosts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    pType = (
        ('Tagged', ('Tagged')),
        ('Posted', ('Posted')),
        ('Liked', ('Liked')),
    )

    postType = models.CharField(
        max_length=50,
        choices=pType,
        default='Posted',
    )

    def __str__(self):
        return 'Post From' + self.user.firstName + (' ') + self.user.lastName


class depPosts(models.Model):

    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    pType = (
        ('Tagged', ('Tagged')),
        ('Posted', ('Posted')),
        ('Liked', ('Liked')),
    )

    postType = models.CharField(
        max_length=50,
        choices=pType,
        default='Posted',
    )

    def __str__(self):
        return 'Post From' + self.Department.name


class projPosts(models.Model):

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    pType = (
        ('Tagged', ('Tagged')),
        ('Posted', ('Posted')),
        ('Liked', ('Liked')),
    )

    postType = models.CharField(
        max_length=50,
        choices=pType,
        default='Posted',
    )

    def __str__(self):
        return 'Post From' + self.Project.name

# DIRECT MESSAGE VIEWS


class Message(models.Model):
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="sender")
    receiver = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="receiver")
    content = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)
# COMMENT VIEWS
# COMMENT VIEWS
# COMMENT VIEWS


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "comment" + self.Post.title


class userComment(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.User.firstName + self.User.lastName + 'comment'


class teamComment(models.Model):
    teamComment = models.ForeignKey(Team, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.Team.name + 'comment'


class projectComment(models.Model):
    projectComment = models.ForeignKey(Project, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.Project.name + 'comment'


class departmentComment(models.Model):
    departmentComment = models.ForeignKey(Department, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.Department.name + 'comment'


class commentAIAD(models.Model):
    aiadComment = models.ForeignKey(AIAD, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    def __str__(self):
        return self.AIAD.name + 'comment'


# FRIEND MODELS
# FRIEND MODELS
# FRIEND MODELS

class Friend(models.Model):
    requester = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="requester")
    accepter = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="accepter")
    message = models.CharField(max_length=200, default='', blank=True)
    url = models.URLField(null='', blank='', default='')
    ifViewed = models.BooleanField(null=False, default=False)
    ifAccepted = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.message

# REACTIONS MODELS
# REACTIONS MODELS
# REACTIONS MODELS


class Reaction(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, blank=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, blank=True)
    message = models.ForeignKey(Message, on_delete=models.CASCADE, blank=True)
    reaction = models.BooleanField(default=False)
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.Reaction.reaction + self.Post.name


class userReaction(models.Model):
    reaction = models.ForeignKey(Reaction, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.User.name + self.Reaction.reaction


class projectReaction(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    reaction = models.ForeignKey(Reaction, on_delete=models.CASCADE)

    def __str__(self):
        return self.Project.name + self.Reaction.reaction


class departmentReaction(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    reaction = models.ForeignKey(Reaction, on_delete=models.CASCADE)

    def __str__(self):
        return self.Department.name + self.Reaction.reaction


class teamReaction(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    reaction = models.ForeignKey(Reaction, on_delete=models.CASCADE)

    def __str__(self):
        return self.Team.name + self.Reaction.reaction

#  TEAM MODELS
# TEAM MODELS
#   TEAM MODELS


class userTeam(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    def __str__(self):
        return self.User.firstName + self.User.lastName + self.Team.name


class departmentTeam(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    def __str__(self):
        return self.Department.name + self.Team.name


class projectTeam(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    def __str__(self):
        return self.Project.name + self.Team.name

# AIAD MODELS
# AIAD MODELS
# AIAD MODELS


class depAIAD(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    AIAD = models.ForeignKey(AIAD, on_delete=models.CASCADE)

    def __str__(self):
        return self.AIAD.name + self.Department.name


class postsAIAD(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    AIAD = models.ForeignKey(AIAD, on_delete=models.CASCADE)

    def __str__(self):
        return self.AIAD.name + self.Post.title


class teamAIAD(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    AIAD = models.ForeignKey(AIAD, on_delete=models.CASCADE)

    def __str__(self):
        return self.AIAD.name + self.Team.name
