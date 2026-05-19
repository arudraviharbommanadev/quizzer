from datetime import datetime

class TimerService:
    @staticmethod
    def remaining_seconds(start_timestamp: datetime, duration_seconds: int) -> int:
        elapsed = int((datetime.utcnow() - start_timestamp).total_seconds())
        return max(duration_seconds - elapsed, 0)
