var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
// the call system command will return whatever the command line would normally output from your input
alert("Current time is " + timeStr);
