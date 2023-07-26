export default function useTimeRemaining(time: string) {
  const timeDiff = new Date().getTime() - new Date(time).getTime();
  const hours = Math.floor(timeDiff / 1000 / 60 / 60);
  return hours > 24
    ? `${Math.floor(hours / 24)} Days ago`
    : `${hours} Hours ago`;
}
