from django import forms
from .models import Post

class TodoForm(forms.ModelForm):
    class Meta:
        model=Post
        fields=('title','description','created_date','due_date','status')
        labels = {
            'title':'Title',
            'description':'Description',
            'created-date':'Created_Date',
            'due_date':'Due_Date',
            'status':'Status'
        }