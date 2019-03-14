# PROBLEMS THAT I HAD WITH THIS PROJECT

## RUNNING react-native run-android

Terminal output after run-android:

```
BUILD SUCCESSFUL in 1m 40s
28 actionable tasks: 28 executed
/bin/sh: 1: adb: not found
Starting the app (adb shell am start -n com.project/com.project.MainActivity...
```

In Smartphone (Moto G4 Plus) the app is installed but not works. Message presented:

"Unable to load script from assets 'index.android.bundle'. Make sure
your bundle is packaged correctly or you're running a packager server."

After this error I have installed adb using Ubuntu apt:

```bash
$ sudo apt install adb
```

Another error rose up on Smartphone:

```
Could not connect to development server.
Try the following to fix the issue:
*Ensure that the packager server is running
*Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
*Ensure Airplane Mode is disabled
*If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to your machine's IP address and the port of the local dev server - e.g. 10.0.1.1:8081

URL: http://localhost:8081/index.delta?platform=android&dev=true&minify=false
```

It's works!

Running the suggested adb command: adb reverse tcp:8081 tcp:8081


### ADB : Device is unauthorized:

To solve (revoke authorized devices on android developers menu before execute this commands):

```bash
sudo adb kill-server
sudo adb start-server
```