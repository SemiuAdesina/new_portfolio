"""Gunicorn configuration file"""
import os

# Bind to the port specified by Render (or default to 5001 for local)
bind = f"0.0.0.0:{os.environ.get('PORT', '5001')}"

# Worker configuration
workers = 2
worker_class = "sync"
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
accesslog = "-"  # Log to stdout
errorlog = "-"  # Log to stderr
loglevel = "info"

# Process naming
proc_name = "portfolio_backend"

# Server mechanics
daemon = False
pidfile = None
umask = 0
user = None
group = None
tmp_upload_dir = None

# SSL (if needed in future)
# keyfile = None
# certfile = None

