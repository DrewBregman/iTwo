from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')

def profile(request, ID):
    context = {
        'user_id': ID,
        'request_id': request.user.id
    }
    return render(request,'frontend/profile.html',context)