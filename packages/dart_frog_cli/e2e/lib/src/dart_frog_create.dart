import 'dart:io';

import 'package:dart_frog_cli_e2e/e2e.dart';

Future<void> dartFrogCreate({
  required String projectName,
  required Directory directory,
}) async {
  await runProcess(
    'dart_frog',
    ['create', projectName],
    workingDirectory: directory.path,
    runInShell: true,
  );
}
