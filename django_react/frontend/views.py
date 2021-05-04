from django.shortcuts import render, redirect


def index(request):
    return render(request, 'frontend/index.html')


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
