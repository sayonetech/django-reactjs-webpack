# Create  Django project using ReactJS and Django REST 

### Requirements

+ Django
+ virtualenv
+ NodeJS with NPM
+ ReactJS
+ Webpack


### Setting up in local

```bash
mkvirtualenv django_react
pip install -r requirement.txt
npm install
python manage.py createsuperuser
python manage.py runserver
```
After completing the above steps you can check whether it is working by open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser. There you can see the sample home page. 

#### To add comments

Go to http://127.0.0.1:8000/api/comments and there you can add comments. Once you have added comments it will be listed on the home page.  

Whenever running in local run `node server.js` in new tab along with `python manage.py runserver` command. This is to avoid running `webpack` command every time after changing Reactfiles.
