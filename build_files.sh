echo 'start build'
pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput
echo 'end  build'
