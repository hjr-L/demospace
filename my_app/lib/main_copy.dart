import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:my_app/widget/myDialog.dart';
import 'package:my_app/widget/pageVIew.dart';
// Import for Android features.
import 'package:webview_flutter/webview_flutter.dart';

// import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page', context: context),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title, required this.context});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;
  final BuildContext context;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final _controller = WebViewController();

  List<Widget> list = [];
  @override
  void initState() {
    super.initState();
    int num = 4;
    for (var i = 0; i < num; i++) {
      list.add(Center(
        child: Text("第$i页"),
      ));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView(
        scrollDirection: Axis.horizontal,
        children: list,
      ),
    );
  }
}
