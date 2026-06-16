@echo off
set "NODE=C:\Users\utkar\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "NEXT=%~dp0node_modules\next\dist\bin\next"
"%NODE%" "%NEXT%" dev -p 3000
