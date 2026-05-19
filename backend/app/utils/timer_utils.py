from datetime import datetime

def unix_timestamp() -> int:
    return int(datetime.utcnow().timestamp())
