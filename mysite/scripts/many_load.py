import csv  # https://docs.python.org/3/library/csv.html

# https://django-extensions.readthedocs.io/en/latest/runscript.html

# python3 manage.py runscript many_load

from unesco.models import Site, Category, Iso,State,Region


def run():
    fhand = open('unesco/load.csv')
    reader = csv.reader(fhand)
    next(reader)  # Advance past the header

    Site.objects.all().delete()
    Category.objects.all().delete()
    Iso.objects.all().delete()
    Region.objects.all().delete()
    State.objects.all().delete()
    # Format
    # email,role,course
    # jane@tsugi.org,I,Python
    # ed@tsugi.org,L,Python

    for row in reader:
        print(row[0])

        c, created = Category.objects.get_or_create(name=row[7])
        s, created = State.objects.get_or_create(name=row[8])
        r, created = Region.objects.get_or_create(name=row[9])
        i, created = Iso.objects.get_or_create(name=row[10])
        try:
          y = float(row[6])
        except:
          y = None
        m = Site(name=row[0],description=row[1],justification=row[2],year=row[3],longitude=row[4],latitude=row[5],area_hectares=y,category=c,state=s,region=r,iso=i)
        m.save()