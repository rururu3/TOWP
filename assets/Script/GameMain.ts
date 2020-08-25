// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainClass extends cc.Component {
  @property(cc.Prefab)
  pointer: cc.Prefab = null;

  @property(cc.Label)
  distanceLabel: cc.Label = null;

  @property(cc.Label)
  selectedLabel: cc.Label = null;

  @property(cc.Label)
  noneSelectedLabel: cc.Label = null;

  @property(cc.Label)
  placeLabel: cc.Label = null;

  @property(cc.Button)
  twitterButton: cc.Button = null;

  protected backgroundNode: cc.Node = null;
  protected rootNode: cc.Node = null;
  protected pointerList: cc.Node[] = [];

  // 選択順を保存する
  protected selectedIndexes: number[] = [];

  // https://docs.cocos.com/creator/manual/en/

  // https://www.benricho.org/chimei/latlng_data.html
  // 県庁所在地位置情報
  protected japanesePrefList: {x: number, y: number, text: string}[] = [
    { y:43.06417, x: 141.34694, text: '札幌市'},
    { y:40.82444, x: 140.74000, text: '青森市'},
    { y:39.70361, x: 141.15250, text: '盛岡市'},
    { y:38.26889, x: 140.87194, text: '仙台市'},
    { y:39.71861, x: 140.10250, text: '秋田市'},
    { y:38.24056, x: 140.36333, text: '山形市'},
    { y:37.75000, x: 140.46778, text: '福島市'},
    { y:36.34139, x: 140.44667, text: '水戸市'},
    { y:36.56583, x: 139.88361, text: '宇都宮市'},
    { y:36.39111, x: 139.06083, text: '前橋市'},
    { y:35.85694, x: 139.64889, text: 'さいたま市'},
    { y:35.60472, x: 140.12333, text: '千葉市'},
    { y:35.68944, x: 139.69167, text: '新宿区'},
    { y:35.44778, x: 139.64250, text: '横浜市'},
    { y:37.90222, x: 139.02361, text: '新潟市'},
    { y:36.69528, x: 137.21139, text: '富山市'},
    { y:36.59444, x: 136.62556, text: '金沢市'},
    { y:36.06528, x: 136.22194, text: '福井市'},
    { y:35.66389, x: 138.56833, text: '甲府市'},
    { y:36.65139, x: 138.18111, text: '長野市'},
    { y:35.39111, x: 136.72222, text: '岐阜市'},
    { y:34.97694, x: 138.38306, text: '静岡市'},
    { y:35.18028, x: 136.90667, text: '名古屋市'},
    { y:34.73028, x: 136.50861, text: '津市'},
    { y:35.00444, x: 135.86833, text: '大津市'},
    { y:35.02139, x: 135.75556, text: '京都市'},
    { y:34.68639, x: 135.52000, text: '大阪市'},
    { y:34.69139, x: 135.18306, text: '神戸市'},
    { y:34.68528, x: 135.83278, text: '奈良市'},
    { y:34.22611, x: 135.16750, text: '和歌山市'},
    { y:35.50361, x: 134.23833, text: '鳥取市'},
    { y:35.47222, x: 133.05056, text: '松江市'},
    { y:34.66167, x: 133.93500, text: '岡山市'},
    { y:34.39639, x: 132.45944, text: '広島市'},
    { y:34.18583, x: 131.47139, text: '山口市'},
    { y:34.06583, x: 134.55944, text: '徳島市'},
    { y:34.34028, x: 134.04333, text: '高松市'},
    { y:33.84167, x: 132.76611, text: '松山市'},
    { y:33.55972, x: 133.53111, text: '高知市'},
    { y:33.60639, x: 130.41806, text: '福岡市'},
    { y:33.24944, x: 130.29889, text: '佐賀市'},
    { y:32.74472, x: 129.87361, text: '長崎市'},
    { y:32.78972, x: 130.74167, text: '熊本市'},
    { y:33.23806, x: 131.61250, text: '大分市'},
    { y:31.91111, x: 131.42389, text: '宮崎市'},
    { y:31.56028, x: 130.55806, text: '鹿児島市'},
    { y:26.21250, x: 127.68111, text: '那覇市'},
  ];
  protected colorList: cc.Color[] = [
    cc.Color.WHITE,
    // cc.Color.BLACK,
    // cc.Color.TRANSPARENT,
    cc.Color.GRAY,
    cc.Color.RED,
    cc.Color.GREEN,
    cc.Color.BLUE,
    cc.Color.YELLOW,
    cc.Color.ORANGE,
    cc.Color.CYAN,
    cc.Color.MAGENTA,
  ];

  protected hashTag: string = '巡回サラリーマン問題回答';
  protected secretKey: string = 'towp2020';

  protected completeDistance: number = 0;

  start() {

    this.backgroundNode = this.node.getChildByName('BackGround');
    this.rootNode = this.node.getChildByName('RootNode');

    // 算出
    let data: {xMin: number, xMax: number, xCenter: number, yMin: number, yMax: number, yCenter: number, count: number} = {
      xMin: 9999,
      xMax: 0,
      xCenter: 0,
      yMin: 9999,
      yMax: 0,
      yCenter: 0,
      count: 0,
    };
    this.japanesePrefList.forEach((v, idx) => {
      data.xMin = Math.min(data.xMin, v.x);
      data.yMin = Math.min(data.yMin, v.y);
      data.xMax = Math.max(data.xMax, v.x);
      data.yMax = Math.max(data.yMax, v.y);
      data.count++;
    });
    data.xCenter = (data.xMin + data.xMax) / 2;
    data.yCenter = (data.yMin + data.yMax) / 2;

    // 比率を縦横で合わせるために最大を取る
    let aspect: number = Math.max(data.xMax - data.xMin, data.yMax - data.yMin);

    this.japanesePrefList.forEach((v, idx) => {
      let item: cc.Node = cc.instantiate(this.pointer);
      item.x = ((v.x - data.xCenter) / aspect) * (960 - 50);
      item.y = ((v.y - data.yCenter) / aspect) * (640 - 50);
      cc.log(`x, y = ${item.x}, ${item.y}`);
      item.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
      item.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
      item.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
      this.rootNode.addChild(item);

      this.pointerList.push(item);

      this.selectedIndexes.push(idx);
    });

    // イベント登録
    let clickEventHandler: cc.Component.EventHandler = new cc.Component.EventHandler();
    clickEventHandler.target = this.node;
    clickEventHandler.component = 'GameMain';
    clickEventHandler.handler = 'onTwitterButtonClick';
    clickEventHandler.customEventData = '';    
    this.twitterButton.clickEvents.push(clickEventHandler);

    // 描画
    this.draw();
  }

  onTwitterButtonClick(event: cc.Event, customEventData: string) {
    this.twitterOpen(`日本一周スコアは${this.completeDistance}です`, this.selectedIndexes);
  }

  onMouseEnter(event: cc.Event) {
    // 親に行かない
    event.stopPropagation();

    // クリックされたもののインデックス
    let clickIdx = this.pointerList.findIndex((v) => {
      return(v == event.target);
    });
    if(clickIdx < 0) {
      return;
    }
    this.placeLabel.string = `場所： ${this.japanesePrefList[clickIdx].text}`;
  }
  
  onMouseLeave(event: cc.Event) {
    // 親に行かない
    event.stopPropagation();

    this.placeLabel.string = `場所：`;
  }

  // マウスダウン時用
  onMouseDown(event: cc.Event) {
    // 親に行かない
    event.stopPropagation();

    // クリックされたもののインデックス
    let clickIdx = this.pointerList.findIndex((v) => {
      return(v == event.target);
    });
    if(clickIdx < 0) {
      return;
    }

    // 選択された場所
    let selectIdx = this.selectedIndexes.findIndex((v) => {
      return(v == clickIdx);
    })

    // 選択されてるかで分岐

    if(selectIdx < 0) {
      this.selectedIndexes.push(clickIdx);
    }
    else {
      // クリックされたものを解除する(クリックされた以後に選択されたのも消す)
      this.selectedIndexes.splice(selectIdx);
    }

    // 描画
    this.draw();
  }

  protected draw() {
    // ラインを書く
    let distance: number = 0;
    let g = this.backgroundNode.getComponent(cc.Graphics);
    let oldNode: cc.Node = null;
    g.clear(true);
    this.selectedIndexes.forEach((v, i) => {
      let node: cc.Node = this.pointerList[v];

      if(oldNode != null) {
        // 線描画
        this.drawLine(g, new cc.Vec2(oldNode.x, oldNode.y), new cc.Vec2(node.x, node.y), this.colorList[i % this.colorList.length]);

        // 距離加算
        distance += Math.pow(node.x - oldNode.x, 2) + Math.pow(node.y - oldNode.y, 2);
      }

      oldNode = node;
    });
    // 全部選択されたときだけは最初に戻る分算出
    if(this.selectedIndexes.length == this.pointerList.length) {
      let node: cc.Node = this.pointerList[this.selectedIndexes[0]];

      // 線描画
      this.drawLine(g, new cc.Vec2(oldNode.x, oldNode.y), new cc.Vec2(node.x, node.y), this.colorList[this.pointerList.length % this.colorList.length]);

      // 距離加算
      distance += Math.pow(node.x - oldNode.x, 2) + Math.pow(node.y - oldNode.y, 2);

      this.twitterButton.node.active = true;
    }
    else {
      this.twitterButton.node.active = false;
    }

    // 距離を入れておく
    this.completeDistance = Math.floor(Math.sqrt(distance));

    // ラベル
    this.distanceLabel.string = `距離： ${this.completeDistance}`;
    this.selectedLabel.string = `選択された数： ${this.selectedIndexes.length}`;
    this.noneSelectedLabel.string = `残り： ${this.pointerList.length - this.selectedIndexes.length}`;
  }

  protected drawLine(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, color: cc.Color) {
    g.fillColor = g.strokeColor = color;
    g.lineWidth = 5;
    g.moveTo(from.x, from.y);
    g.lineTo(to.x, to.y);
    g.stroke();
  }

  /**
   * ツイッター投稿用URLオープン
   */
  protected twitterOpen(text: string, selectIndexes: number[]) {
    // 暗号化する
    let encrypt = btoa(selectIndexes.join(','));
    text = `${encodeURI(text)} (${encrypt})`;

    // http://westplain.sakuraweb.com/translate/twitter/Documentation/Twitter-for-Websites/Tweet-Button/Web-Intent.cgi
    cc.sys.openURL(`https://twitter.com/compose/tweet?text=${text}&hashtags=${encodeURI(this.hashTag)}`);
  }
}

