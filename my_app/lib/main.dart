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

  @override
  void initState() {
    super.initState();
    String str;
    _controller
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(Color.fromARGB(0, 104, 89, 89))
      ..addJavaScriptChannel('ShowMessage',
          onMessageReceived: (message) => {
                print(message),
                str = '我收到了，${message.message}',
                _controller.runJavaScript("globalCallback('$str')"),
                showAboutDialog(
                    context: context, children: [Text(message.message)])
              })
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (int progress) {
            // Update loading bar.
          },
          onPageStarted: (String url) {},
          onPageFinished: (String url) {},
          onWebResourceError: (WebResourceError error) {},
          onNavigationRequest: (NavigationRequest request) {
            print('request navigato');
            return NavigationDecision.navigate;
          },
        ),
      )
      ..loadRequest(Uri.parse('http://127.0.0.1:5173'));
  }

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
    });
  }

  void _myDialog() {
    showDialog(
        context: context,
        builder: ((context) {
          return MyDialog(
            title: "我是title",
            content: "我是content",
          );
        }));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: WebViewWidget(controller: _controller),
      ),
    );
  }
}
