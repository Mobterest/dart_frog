import 'dart:io';

import 'package:dart_frog_cli_e2e/e2e.dart';

Future<void> dartFrogBuild({
  required Directory directory,
}) async {
  await runProcess(
    'dart_frog',
    ['build'],
    workingDirectory: directory.path,
    runInShell: true,
  );
}
