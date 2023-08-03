import 'package:flutter/material.dart';

// ignore: must_be_immutable
class MyDialog extends Dialog {
  String title;
  String content;
  MyDialog({super.key, required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return Material(
      type: MaterialType.transparency,
      child: Center(
          child: Container(
        width: 200,
        height: 200,
        color: Colors.white70,
        child: Padding(
          padding: EdgeInsets.all(5),
          child: Column(
            children: [
              Stack(
                children: [
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Text(title),
                  ),
                  Align(
                    alignment: Alignment.centerRight,
                    child: InkWell(
                      child: const Icon(Icons.close),
                      onTap: () {
                        print("inkwell tap");
                        Navigator.pop(context);
                      },
                    ),
                  )
                ],
              ),
              const Divider(),
              Text(content)
            ],
          ),
        ),
      )),
    );
  }
}
