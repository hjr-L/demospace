import 'package:flutter/material.dart';

class MyPageView extends StatelessWidget {
  const MyPageView({super.key});

  @override
  Widget build(BuildContext context) {
    return PageView.builder(
      itemCount: 5,
      itemBuilder: (context, index) {
        return Center(
          child: Text('这是第${index+1}页'),
        );
      },
    );
  }
}
