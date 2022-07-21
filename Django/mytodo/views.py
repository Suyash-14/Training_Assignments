from django.shortcuts import render,redirect
from .forms import TodoForm
from .models import Post
from django.template import loader

def todo_form(request):
    if request.method == 'POST':
        post = Post()
        post.title = request.POST.get('title')
        post.description = request.POST.get('description')
        post.created_date = request.POST.get('created_date')
        post.due_date = request.POST.get('due_date')
        post.status = request.POST.get('status')
        post.save()
        return redirect(todo_list)
    form = TodoForm()
    return render(request, "mytodo/todo_form.html", {'form': form})
    

def todo_list(request):
    tasks = Post.objects.all()
    return render(request,'mytodo/todo_list.html', {'tasks':tasks})


def todo_delete(request,title):
    activity = Post.objects.get(title=title)
    activity.delete() 
    return redirect(todo_list)


def todo_update(request, title):
    if request.method == 'POST':
        post=Post.objects.get(title=title)
        post.title=request.POST.get('title')
        post.description=request.POST.get('description')
        post.created_date=request.POST.get('created_date')
        post.due_date=request.POST.get('due_date')
        post.status=request.POST.get('status')
        post.save()
        return redirect(todo_list)
    activity=Post.objects.filter(title=title)
    return render(request,'mytodo/update.html',{'title':activity[0].title,'description':activity[0].description,'created_date':activity[0].created_date,'due_date':activity[0].due_date,'status':activity[0].status})
    
       
