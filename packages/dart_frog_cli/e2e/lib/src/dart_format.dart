import 'dart:io';

import 'package:dart_frog_cli_e2e/e2e.dart';

Future<void> dartFormat(Directory directory) async {
  await runProcess(
    'dart',
    ['format', '--set-exit-if-changed', '.'],
    workingDirectory: directory.path,
    runInShell: true,
  );
}
