# css3 3d柱体环绕视角DEMO

是在看了这篇文章之后动手实践的。

[http://web.jobbole.com/87834/](http://web.jobbole.com/87834/)

从这个实例中抠图

[https://shakeduang.nuomi.com/campus/index.html?from=timeline&isappinstalled=1](https://shakeduang.nuomi.com/campus/index.html?from=timeline&isappinstalled=1)

从而实现的简化版demo，其中的原理可以参考之前提到的文章。

我的demo代码：
[git](https://shakeduang.nuomi.com/campus/index.html?from=timeline&isappinstalled=1)

我这主要说一下我碰到的绕非x/y/z轴旋转的问题：

做gif图太发麻了，简要说明一下：

就是一个元素只能绕x/y/z轴通过rotateX/Y/Z旋转，空间轴是固定不动的。这时候如果想让它绕其他轴旋转，便可以才起父元素先进行一定角度的旋转，从某种意义上来说就是改变了这个元素的空间轴的方向。便是起到了绕其他轴旋转的效果~