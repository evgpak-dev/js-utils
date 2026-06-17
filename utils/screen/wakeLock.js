const isSupported = typeof window !== "undefined" && "wakeLock" in navigator;

if (isSupported) {
  console.log("Screen Wake Lock API is supported.");
}

let wakeLockSentinel = null;

export async function requestWakeLock() {
  if (!isSupported) {
    console.warn("Screen Wake Lock API is not supported in this environment.");
    return;
  }

  if (wakeLockSentinel !== null) return;

  try {
    wakeLockSentinel = await navigator.wakeLock.request("screen");
    console.log("Wake Lock active!");

    wakeLockSentinel.addEventListener("release", () => {
      console.log("Wake Lock was released by the system.");
      wakeLockSentinel = null;
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

export async function releaseWakeLock() {
  if (wakeLockSentinel !== null) {
    await wakeLockSentinel.release();
    wakeLockSentinel = null;
    console.log("Wake Lock released.");
  }
}

if (isSupported) {
  await requestWakeLock();

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible") {
      await requestWakeLock();
    }
  });
}
