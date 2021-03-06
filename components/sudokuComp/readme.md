# SudokuComp 规格说明文档

## 功能



### 补充

#### 重开一局

#### 撤销操作



运行时：

* 一个Cell被select，广播自己的row，col与currentNumber。
* Vuex接受这个info，并且将这个info压入buffer栈中



撤销时：

* 点击撤销按钮
* Vuex将栈指针退后1位，
  * 若退后之前，指针已经在栈底，不做后续的操作
* 将此时栈顶的info作为selectedCellInfo



撤回时：

* 点击撤回按钮
* Vuex将栈指针向前1位，将此时栈顶的info作为selectedCellInfo



栈：

* 



#### numselector优化

#### 改变候选数（同时改变dispay与select）



### NORMAL玩法

1. 玩家在81个格子中选择一个格子 y
   * 若该格子是固定，系统无反应，玩家需要重新选择
   * （可选）：对任何选中的格子，在其所在的R，C，B中突出显示相同的且待定的数字
2. 系统显示该格子可以填入的所有数字
3. 玩家选择一个数字
   * 若选0，则该格子不显示任何数字，并用更小的字号显示该格子在当前局势下可能的待定数字

4. 系统将该数字显示到格子中，若此时整个盘面满足数独的基本规则，则游戏通关，否则回到第一步

### PUZZEL玩法





## 层次关系

SudokuComp中的组件形成一个层次关系，从上到下分别为

* SudokuComp
* NumSelector（独立），Board。Board又包括如下组件
* Block
* Cell
* TinyCell



## 组件

### SudokuComp

#### 描述

是一个相对独立完整的组件，可以直接在任何其余页面直接使用

#### 布局

包括一个Board组件以及一个NumSelector组件，且布局上NumSelector组件在Board组件的下方

#### 数据接口

```js
//所有prop都将放入VueX中的SudokuComp进行管理
prop:{   
    /*使用字符串常量模拟枚举类型，表示两种游戏模式NORMAL与PUZZLE。*/
    gameMode: ENUM, 
        
    /*接受一个9*9的二位数组，数组中每个元素在0~9之间，数组中的每个元素映射到数独游戏中的一个格子。若gameMode是NORMAL，则使用0代表需要玩家填写。若gameMode是PUZZLE，则有且仅有一个Block（即一个3*3的宫格）全为0*/
    sudokuState: List, 
},
$emit:{
    ("gameOver", result)//数独游戏结束（指通关），result内容待定
  	("gamePause", result)//玩家中断该局游戏，  result内容待定
}
```





### NumSelector

#### 描述

NumSelector组件，允许玩家在填写某个Cell的时候进行数字选择。

可填写的数字在开局时按照数独的基本规则确定，且不跟据玩家填写其余格子的数字而改变。

#### 布局

长方形，可左右滑动，最多同时显示3个数字，中间的数字代表填入格子的数字，修改左右两个数字的透明度

#### 数据接口

通过vuex获取玩家当前选择的格子位置`（selectedCellRow， selectedCellCol）`，根据位置在Vuex（一个9\*9\*List）中获取待显示的数字列表`toBeSelected:List`

列表中的1~9代表待显示的数字，0代表将格子置空，每个toBeSelected必须有0，且列表中的数字按从小到大的顺序排列





### Board

#### 描述

代表数独的整个棋盘盘面，

#### 布局

包括9个Block，按3*3的布局排列

#### 数据接口

```js
this.$store.state.GameMode.SudokuComp
```

若`GameMode === "NORMAL"`，则

若`GameMode === "PUZZLE"`，则整个Board绑定一个监听器，监听用户手势，并根据手势对Block进行动画





### Block

#### 描述

代表数独盘面中的一个宫格。

若`GameMode === "NORMAL"`，则

若`GameMode === "PUZZLE"`，则Board可根据用户手势，对Block进行动画操作。

#### 布局

则包括9个Cell，按3*3的布局排列

#### 数据接口





### Cell

#### 描述

代表数独盘面中的一个格子。显示该局数独中，起始的数字以及玩家填写的数字，或者若该格子为空，则使用TinyCell显示当前盘面的局势下下该格子的所有待定数字

#### 布局

则包括9个TinyCell，按3*3的布局排列

#### 数据接口

```js
prop:{
    /*该格子在所有81个格子中的位置，根据该位置在VueX中获取需要显示的数字。若数字为1~9，则直接显示；若为0，则显示TinyCell的内容*/
    row: Number, 	//0~8
    col: Number,	//0~8
}
this.$store.emit('changeSelectedCell', {row, col}).SudokuComp //修改selectedCellRow, selectedCellCol
this.$store.state.toBeDisplay.SudokuComp
this.$store.state.GameMode.SudokuComp
```

若GameMode 为 NORMAL，则监听click事件

### TinyCell

#### 描述

显示一个待定数字。0置空，1~9则正常显示

#### 布局

无

#### 数据接口

```js
prop:{
    numToBeDisplay: Number,//0~9
}
```





## 流程

### 公共部分

vuex：selectedCellRow，selectedCellCol，selectedCellCurrentNumber，gameMode，origSudokuState，currentSudokuState



初始化：

1. 调用者传入gameMode与sudokuState给sudokuComp，sudokuComp广播这两个参数
2. Vuex初始化gameMode，origSudokuState，currentSudokuState



每个Cell 持有自己的在整个Board中的位置（row, col），selected：Boolean，currentNumber：Number

**使用getter监听cellSelfState（row，col），cellNum2BDisplay（row, col)**的变化，



### NORMAL

1. 用户Click一个Cell，该Cell广播自己的$(row, col)与currentNumber$，自己设为selected=true，其余cell设selected=false
2. sudokuComp监听有新的Cell被选择，监听获取新的cellNumberToBeSelect保存到本地，将本地的cNTBS按固定规则修改，监听获取currentNumber，将这两个参数传入numSelector显示，并监听选择效果
3. 获取选择结果，广播该结果，提交更改currentSudokuState，
4. selected Cell 监听该结果，并修改自己的currenNumber，
5. 对属于一个Unit中的Cell，重新计算自己的候选数字

### PUZZLE

初始化



playing：

1. 用户滑动一个手势，Board判断手势方向，判断某个Block进行移动，广播Block的变更
2. VueX中，监听变更，修改currentSudokuState，





## 设计

### 初始化

只有父组件初始化后，子组件才能开始初始化。

1. SudokuComp，beforeMount：参数gameMode，sudokuState。使用参数初始化store。若NORMAL，可以不做任何东西。若PUZZLE，初始化store，寻找出state全为0的宫格坐标并缓存。
2. Board。无参数。beforeMount：创建wx.Animation，创建9个动画实例用于绑定每个Square；获取系统硬件的信息，计算动画所用数据并缓存。使用data：Squares：[]绑定每个Square
3. Square。参数squareRow，squareCol。immediate watch：squareCoor，缓存参数，初始化cells数组，使用cells内容绑定下属的9个cell
4. Cell。参数cellRow，cellCol。beforeMount：获取映射格子的state并缓存，获取映射格子的候选数并缓存，根据state设置emptyFlag与disableFlag
5. TinyCell。略



### NORMAL

#### 选择数字

1. 玩家点击cell组件，触发click事件。
2. 

