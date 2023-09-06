import 'dart:io';

import 'package:dart_frog_cli_e2e/e2e.dart';

Future<void> dartAnalyze(Directory directory) async {
  final result = await runProcess(
    'dart',
    ['analyze', '.'],
    workingDirectory: directory.path,
    runInShell: true,
  );

  final output = result.stdout as String;
  if (!output.contains('No issues found!')) {
    throw Exception('dart analyze reported problems:\n$output');
  }
}
