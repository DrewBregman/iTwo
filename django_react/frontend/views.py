from leads.models import Profile, Source
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
import sys
from .forms import RegisterForm
sys.path.append("..")


def index(request):
    return render(request, 'frontend/index.html')


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            #j = Profile(user = User.objects.get(username = username))
            # j.save()
            j = User.objects.get(username=username)
            prof = Profile(user=j)
            prof.save()
            src = Source(profile=prof)
            src.save()
            prof.sourceID = src
            prof.save()
            return redirect('login')
        #messages.success(request, 'Your account has been created! You are now able to log in')
        # return HttpResponse("regii")
    form = RegisterForm()
    return render(request, "registration/register.html", {'form': form})


def profile(request, ID):
    context = {
        'user_id': ID,
        'request_id': request.user.id
    }
    if ID == request.user.id:
        return redirect('/p/self/'+str(ID))
    return render(request, 'frontend/profile.html', context)


def profileSelf(request, ID):
    context = {
        'user_id': ID,
        'request_id': request.user.id
    }
    return render(request, 'frontend/profileSelf.html', context)


def project(request, id):
    context = {
        'project_id': id,
    }

    return render(request, 'frontend/project.html', context)


def feed(request, id):
    context = {
        'request_id': id,
    }

    return render(request, 'frontend/feed.html', context)


def department(request, id):
    context = {
        'department_id': id,
    }

    return render(request, 'frontend/department.html', context)


def club(request, id):
    context = {
        'club_id': id,
    }

    return render(request, 'frontend/club.html', context)
