call npm install
call npm run build

call cd %DEPLOYMENT_TARGET%
call for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
xcopy /d %DEPLOYMENT_SOURCE%\dist\* %DEPLOYMENT_TARGET%\ /s /i
xcopy /d %DEPLOYMENT_SOURCE%\dist\* %DEPLOYMENT_TARGET%\web.config /s /i
echo Deployed.
