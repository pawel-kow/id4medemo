FROM python:3.7-stretch
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
RUN git clone --single-branch --branch  experiment/netidwithid4merepolookup https://gitlab.com/ID4me/id4me-rp-client-python.git && cd id4me-rp-client-python && pip install . && cd ..
RUN git clone --single-branch --branch  experimental/netidtrust https://gitlab.com/ID4me/django-allauth-id4me.git && cd django-allauth-id4me && pip install . && cd ..
COPY . /code/