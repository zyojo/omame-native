# コーヒー豆記録アプリ MVP UI仕様書

## 概要

コーヒー豆の袋を撮影し、情報を抽出・記録するスマートフォンアプリのMVP版UI仕様書です。Tailwind CSSの暖色系グレースケール（stoneカラー）を基調としたミニマルなデザインです。

## 画面構成

### 画面一覧
1. スプラッシュ画面
2. ホーム画面（豆一覧）
3. カメラ画面
4. 画像確認画面
5. 情報編集画面
6. 詳細表示画面

## 画面詳細

### 共通設定
- **背景色**: `bg-stone-50`
- **セーフエリア**: iOS/Androidのシステムバーを考慮

### 1. スプラッシュ画面

**目的**: アプリ起動時のローディング画面

**要素**:
- アプリロゴ（中央配置）
- アプリ名
- ローディングインジケーター

**表示時間**: 1-2秒

---

### 2. ホーム画面（豆一覧）

**目的**: 記録済みコーヒー豆の一覧表示と管理

**ヘッダー**:
- アプリタイトル（左、`text-lg font-semibold text-stone-900`）
- アイコンボタン（`text-stone-600 p-2`）
  - 検索アイコン（右）
  - フィルターアイコン（右）
  - ソートアイコン（右）

**メインコンテンツ**:
- **豆カードリスト**（縦スクロール）
  - カード: `bg-white rounded-lg border border-stone-200 p-4`
  - サムネイル画像（左側、`w-20 h-20 rounded-md object-cover`）
  - 豆の名前（`text-base font-medium text-stone-900`）
  - ロースター名（`text-sm text-stone-600`）
  - 焙煎日（`text-sm text-stone-500`）
  - 登録日（右上、`text-xs text-stone-400`）

**フローティングアクションボタン（FAB）**:
- 「＋」アイコン（`text-white`）
- 右下配置（`fixed bottom-6 right-6`）
- スタイル: `bg-stone-800 w-14 h-14 rounded-full shadow-lg flex items-center justify-center`

**空状態**:
- イラスト/アイコン（`text-stone-300`）
- 「最初の豆を記録しましょう」メッセージ（`text-stone-500`）
- 「記録を始める」ボタン（`bg-stone-800 text-white`）

**検索バー**（展開時）:
- 全画面オーバーレイ（`bg-white`）
- テキスト入力フィールド（`border-b border-stone-200 px-4 py-3 text-lg`）
- リアルタイム検索結果（`divide-y divide-stone-100`）

**ソートメニュー**（モーダル）:
- 背景オーバーレイ（`bg-stone-900/50`）
- メニューコンテナ（`bg-white rounded-t-2xl`）
- 各オプション（`flex items-center justify-between p-4 active:bg-stone-50`）
  - 登録日（新しい順/古い順）
  - 焙煎日（新しい順/古い順）
  - 豆の名前（A-Z/Z-A）
  - ロースター名（A-Z/Z-A）
- 選択中の項目（`text-stone-900 font-medium`にチェックアイコン）

**フィルターメニュー**（モーダル）:
- 背景オーバーレイ（`bg-stone-900/50`）
- メニューコンテナ（`bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto`）
- セクションヘッダー（`text-sm font-medium text-stone-900 px-4 pt-4 pb-2`）
- **ロースター**（チェックボックスリスト、`px-4 py-2`）
- **産地**（チェックボックスリスト、`px-4 py-2`）
- **焙煎度**
  - 選択チップ: `inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2`
  - 未選択: `bg-stone-100 text-stone-700`
  - 選択済: `bg-stone-800 text-white`
- **期間**（焙煎日ベース）
  - ラジオボタンリスト
- フッター（`border-t border-stone-200 p-4 flex gap-3`）
  - 「リセット」ボタン（`flex-1 text-stone-600 border border-stone-200 rounded-md py-2`）
  - 「適用」ボタン（`flex-1 bg-stone-800 text-white rounded-md py-2`）

---

### 3. カメラ画面

**目的**: 豆の袋を撮影

**要素**:
- カメラプレビュー（全画面）
- 撮影ガイド枠（中央、`border-2 border-dashed border-stone-300`）
- ヒントテキスト「袋全体が枠内に収まるように撮影」（`text-stone-500 bg-stone-900/50 px-3 py-1 rounded`）

**コントロール**（下部）:
- 戻るボタン（左）
- シャッターボタン（中央、大きめ）
- ギャラリーボタン（右）

**その他**:
- フラッシュ切り替えボタン（右上）
- グリッド表示切り替え（左上）

---

### 4. 画像確認画面

**目的**: 撮影/選択した画像の確認

**要素**:
- 撮影画像（中央、大きく表示）
- 画像品質インジケーター
  - 良好: `text-emerald-600`「画像は鮮明です」
  - 普通: `text-amber-600`「画像品質は十分です」
  - 低品質: `text-red-600`「画像が不鮮明です」

**ボタン**（下部）:
- 「撮り直す」（`bg-white border border-stone-200 text-stone-700`）
- 「使用する」（`bg-stone-800 text-white`）

---

### 5. 情報編集画面

**目的**: 抽出された情報の確認と編集

**ヘッダー**:
- 「キャンセル」ボタン（左、`text-stone-600`）
- 「新規登録」タイトル（中央、`text-lg font-semibold text-stone-900`）
- 「保存」ボタン（右）
  - 無効時: `text-stone-400`
  - 有効時: `text-stone-800 font-medium`

**画像セクション**:
- 撮影画像（上部、横幅いっぱい、16:9、`rounded-lg`）
- 「画像を変更」ボタン（オーバーレイ、`bg-stone-900/70 text-white px-3 py-1 rounded`）

**基本情報セクション**:
- **豆の名前** *（必須）
  - テキストフィールド（`border border-stone-200 rounded-md px-3 py-2`）
  - プレースホルダー「例：ブルーマウンテン No.1」（`placeholder-stone-400`）
  - 必須マーク（`text-red-500`）
- **ロースター名** *（必須）
  - テキストフィールド（同上）
  - オートコンプリート機能
  - 必須マーク（`text-red-500`）
- **焙煎日** *（必須）
  - 日付ピッカー（`border border-stone-200 rounded-md px-3 py-2`）
  - デフォルト：今日の日付
  - 必須マーク（`text-red-500`）

**追加情報セクション**（折りたたみ可能）:
- セクションヘッダー（`flex items-center justify-between p-3 bg-stone-50 rounded-md`）
  - タイトル「詳細情報」（`text-sm font-medium text-stone-700`）
  - 展開アイコン（`text-stone-400`）
- **産地国**
  - ドロップダウン
- **産地地域**
  - テキストフィールド
- **農園名**
  - テキストフィールド
- **標高**
  - 数値入力「m」
- **品種**
  - タグ選択式（`bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm`）
  - 選択時: `bg-stone-800 text-white`
  - カスタム追加可能（`+ ボタン`）
- **精製方法**
  - 選択式（ウォッシュド/ナチュラル/ハニー等）
- **焙煎度**
  - スライダー（`accent-stone-800`）
  - ラベル: 浅煎り・中煎り・深煎り（`text-sm text-stone-600`）
- **価格**
  - 数値入力「¥」
- **内容量**
  - 数値入力「g」

**OCR結果表示**:
- 各フィールドに自動入力
- 信頼度低い項目は背景色で表示（`bg-amber-50 border-amber-200`）

---

### 6. 詳細表示画面

**目的**: 登録済み豆の詳細情報表示

**ヘッダー**:
- 戻るボタン（左）
- 編集ボタン（右）
- 削除ボタン（右）

**コンテンツ**:
- 豆の画像（上部、大きく）
- 基本情報カード
- 詳細情報カード（登録されている項目のみ表示）
- 購入店舗情報（あれば）

## UIコンポーネント

### カラーパレット（Tailwind CSS）
- **背景**:
  - メイン: `stone-50` (#fafaf8)
  - カード: `white` (#ffffff)
  - オーバーレイ: `stone-900/50` (半透明)
- **テキスト**:
  - 見出し: `stone-900` (#1c1917)
  - 本文: `stone-700` (#44403c)
  - キャプション: `stone-500` (#78716c)
  - プレースホルダー: `stone-400` (#a8a29e)
- **ボーダー**: `stone-200` (#e7e5e4)
- **アクション**:
  - プライマリボタン: `stone-800` (#292524)
  - セカンダリボタン: `stone-200` (#e7e5e4)
  - ホバー: `stone-700` (#44403c)
  - 無効: `stone-300` (#d6d3d1)
- **ステータス**:
  - 成功: `emerald-600` (#059669)
  - エラー: `red-600` (#dc2626)
  - 警告: `amber-600` (#d97706)

### タイポグラフィ
- **見出し大**: `text-2xl font-semibold text-stone-900`
- **見出し中**: `text-lg font-medium text-stone-900`
- **本文**: `text-base text-stone-700`
- **キャプション**: `text-sm text-stone-500`
- **極小**: `text-xs text-stone-400`

### コンポーネント
- **カード**: 
  - `bg-white rounded-lg border border-stone-200`
  - ホバー時: `hover:shadow-sm transition-shadow`
- **プライマリボタン**: 
  - `bg-stone-800 text-white rounded-md px-4 py-2`
  - ホバー: `hover:bg-stone-700`
  - 無効: `disabled:bg-stone-300 disabled:text-stone-500`
- **セカンダリボタン**: 
  - `bg-white border border-stone-200 text-stone-700 rounded-md px-4 py-2`
  - ホバー: `hover:bg-stone-50`
- **入力フィールド**: 
  - `border border-stone-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-500`
- **FAB**: 
  - `bg-stone-800 text-white rounded-full w-14 h-14 shadow-lg`
  - ホバー: `hover:bg-stone-700 hover:shadow-xl`

## インタラクション

### アニメーション
- 画面遷移: スライド
- カード表示: フェードイン
- FABタップ: 拡大→画面遷移
- 削除: スワイプジェスチャー

### フィードバック
- タップ: リップルエフェクト（`bg-stone-200`の波紋）
- 長押し: バイブレーション
- 保存完了: トースト通知（`bg-stone-800 text-white`）
- エラー: アラートダイアログ（`text-red-600`のメッセージ）

## レスポンシブ対応

### 対応デバイス
- iPhone SE〜Pro Max
- Android各種サイズ

### 考慮事項
- Safe Area対応
- 横向き非対応（MVPでは縦向きのみ）
- ダークモード対応（将来）

## アクセシビリティ

- 最小タップ領域: 44×44pt
- コントラスト比: WCAG AA準拠
- VoiceOver/TalkBack対応
- 重要操作の確認ダイアログ