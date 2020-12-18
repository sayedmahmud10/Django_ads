
from django.http import HttpResponse










def indexview(request):
    print(request.COOKIES)
    oldval = request.COOKIES.get('zap', 1)
    resp = HttpResponse('view count='+str(oldval))
    if oldval :
        resp.set_cookie('zap', int(oldval)+1) # No expired date = until browser close
    else :
        resp.set_cookie('zap', 0)
    resp.set_cookie('dj4e_cookie', 'e2c2ff9c', max_age=1000)
    return resp


