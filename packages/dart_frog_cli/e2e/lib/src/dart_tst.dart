import 'dart:io';

import 'package:dart_frog_cli_e2e/e2e.dart';

Future<void> dartTest(Directory directory) async {
  final result = await runProcess(
    'dart',
    ['test'],
    workingDirectory: directory.path,
    runInShell: true,
  );

  final errors = result.stderr as String;
  if (errors.isNotEmpty) {
    throw Exception('dart test reported errors:\n$errors');
  }
}
