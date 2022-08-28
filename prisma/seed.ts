import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    const m_category_yellow = await prisma.M_category.create({
        data: {
            parent_id: 0,
            category_name: "イエローベース"
        },
    });
    const m_category_blue = await prisma.M_category.create({
        data: {
            parent_id: 0,
            category_name: "ブルーベース"
        },
    });    
    const m_category_yellow_spring = await prisma.M_category.create({
        data:{
            parent_id: 1,
            category_name: "春"
        },
    });
    const m_category_yellow_summer = await prisma.M_category.create({
        data:{
            parent_id: 1,
            category_name: "夏"
        },
    });   
    const m_category_blue_autumn = await prisma.M_category.create({
        data:{
            parent_id: 2,
            category_name: "秋"
        },
    });    
    const m_category_blue_winter = await prisma.M_category.create({
        data:{
            parent_id: 2,
            category_name: "冬"
        },
    });    
    const article = await prisma.article.create({
        data:{
            product_image_path: '4973167066126-eyecoloration16-1L.jpg',
            product_name: 'アイカラーレーション',
            product_price: 6820,
            official_link:'https://www.lunasol-official.com/%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC/POINT-MAKEUP/EYESHADOW/%E3%82%A2%E3%82%A4%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3/p/25425437',
            product_explain_text: '息をのむほどにあざやかな色や、繊細なニュアンスを秘めた色。たっぷりのきらめきを詰めこんだ質感や、マットで端正な質感。個性豊かな色や質感を自由に遊べる、4色セットのアイシャドウ。美しい配色が、溶けこむようにまぶたを彩って、立体的なまなざしへ。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            },
                        },
                    },
                ],
            },
        },
    }); 

    const article1 = await prisma.article.create({
        data:{
            product_image_path: 'Y0139000_C013900689_E01_ZHC.jpg',
            product_name: 'サンク　クルール　クチュール',
            product_price: 8470,
            official_link:'https://www.dior.com/ja_jp/beauty/products/Y0139000_C013900689-%E3%82%B5%E3%83%B3%E3%82%AF-%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%AB-%E3%82%AF%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AB-%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%9F%E3%83%BC%E3%81%AA%E7%94%9F%E8%B3%AA%E6%84%9F%E3%80%81%E9%AB%98%E7%99%BA%E8%89%B2%E9%AB%98%E5%AF%86%E7%9D%80%E3%82%92%E5%8F%B6%E3%81%88%E3%82%8B%E3%83%8F%E3%82%9A%E3%82%A6%E3%82%BF%E3%82%99%E3%83%BC-%E3%82%A2%E3%82%A4%E3%82%B7%E3%83%A3%E3%83%88%E3%82%99%E3%82%A6?utm_source=yahoo&utm_medium=cpc&utm_term=branded&utm_campaign=eyes-all_eyes-y0139000_jp_jp_nov20_bra_&utm_content=DiorShow_5Couleurs&yclid=YSS.1000420482.EAIaIQobChMI_OuH4oPp-QIVgNdMAh3Ulg_CEAAYASAAEgJ6ovD_BwE&gclid=CPHhjuOD6fkCFQMEvAodAHIIQw&gclsrc=ds',
            product_explain_text: 'ディオール メイクアップを象徴するサンク クルールが、新たにサンク クルール クチュールとして生まれ変わりました。 デニム、ブラック ボウ、ルージュ トラファルガー、ミッツァ…ディオール クチュールのアイコニックなドレスにインスパイアされたパレットは、どれも濃密なシェードからなるニュアンス豊かなハーモニー。組み合わせしやすく、使い勝手抜群です。 それぞれパレットによって楽しめる、マット、サテン、パーリー、メタリック、ハイライト、グリッターの多彩なエフェクト。華麗なシェードで彩る鮮やかなメイクアップで、美しい、魅惑の眼差しに仕上げてください。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article2 = await prisma.article.create({
        data:{
            product_image_path: '210219bt_tf01_0.jpg',
            product_name: 'アイカラークォード',
            product_price: 11550,
            official_link:'https://meeco.mistore.jp/meeco/product/7780900000000000000001001421.html?utm_source=yahoo&utm_medium=cpc&utm_campaign=DAS01_DAS&utm_content=DAS01_DAS&me-cid=yss_s05_00001&yclid=YSS.1001120434.EAIaIQobChMIl_jeo4Xp-QIVf9lMAh3umgGXEAAYASAAEgIsDPD_BwE',
            product_explain_text: '「目もとは、あなたの人柄を創り、あなたらしさを映し出し、ルックで本当のあなたを表現するための最も効果的な方法です。」 －トム フォード－ 「アイ カラー クォード」はトム フォード カラーコレクションの中心となる製品。 4色のカラーハーモニーで構成され、ソフトルックからボールドルックまで、さまざまなルックを楽しむことができます。 シェード毎に、シアースパークル、サテン、シマー、マットが絶妙に配色され、見たままの鮮やかな発色と色持ちを実現します。 2つのカスタムアプリケーターが含まれています。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article3 = await prisma.article.create({
        data:{
            product_image_path: 'img1_03.png',
            product_name: 'ベージュトーンアイシャドウ',
            product_price: 748,
            official_link:'https://www.cezanne.co.jp/lineup/4939553042334/',
            product_explain_text: '肌馴染み抜群のベージュを基調としたカラー。ラメ・パール・マットの３質感を重ねて、自然にまぶたを強調し奥行のある大きな目元へ。しっとり溶け込むような柔らかなパウダーなので、スルスル伸びてまぶたにピタッと密着。保湿成分(スクワラン・ホホバ種子油)配合。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 
    const article4 = await prisma.article.create({
        data:{
            product_image_path: 'JEEB.GY080.png',
            product_name: 'アイグロウ ジェム',
            product_price: 2970,
            official_link:'https://www.decorte.com/site/g/gJEEB080/',
            product_explain_text: 'モダンで知的な印象のパープルグレー ●1色で立体的なグラデーション 光と影を操り、自然な陰影を実現。絶妙な発色と透け感で、重ねるほどに際立つ立体感。 ●高い密着力で、長時間よれない なめらかにのび広がり、吸いつくようにフィット。くすまず、よれず、美しい仕上がりが持続。 ●選べる質感×豊富なカラーバリエーション ●ONでもOFFでも使いやすく、色と輝きの組み合わせも自由自在。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article5 = await prisma.article.create({
        data:{
            product_image_path: '190605bt_lm01_0.jpg',
            product_name: 'キャビアスティック アイカラー',
            product_price: 3520,
            official_link:'https://meeco.mistore.jp/meeco/product/7780900000000000000000997505.html?utm_source=yahoo&utm_medium=cpc&utm_campaign=DAS01_DAS&utm_content=DAS01_DAS&me-cid=yss_s05_00001&yclid=YSS.1001120434.EAIaIQobChMIwrzl64fp-QIVhjMqCh2QqQ2hEAAYAiAAEgJMYfD_BwE',
            product_explain_text: 'なめらかに伸び、ぴたりとなじむ。プロの仕上がりを持ち運べる変幻自在のスティックタイプのアイカラー。「キャビアスティックアイカラー」はロングウエアリングなクリーミィシャドウです。肌の上でしっかりのびる軽いテクスチャーで、まぶたにしっかりと密着。均一な状態で落ちにくく1日中つけたての色が長続きします。※お届けする商品のパッケージが画像と異なる場合がございます。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article6 = await prisma.article.create({
        data:{
            product_image_path: '4901008312545_4.jpg',
            product_name: 'シルキースフレアイズ',
            product_price: 825,
            official_link:'https://www.canmake.com/item/detail/105',
            product_explain_text: 'しっとり密着！リッチな質感！透けツヤ４色アイシャドウシルクのようなツヤ感とスフレのようななめらかさ。繊細なパールが配合されたやわらかなしっとりパウダーで、上品な目元に仕上がります。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'ブルーベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article7 = await prisma.article.create({
        data:{
            product_image_path: 'Y0012000_C001200007_E01_ZHC.jpg',
            product_name: 'ディオール バックステージ アイ パレット',
            product_price: 6050,
            official_link:'https://www.dior.com/ja_jp/beauty/products/Y0012000-%E3%83%87%E3%82%A3%E3%82%AA%E3%83%BC%E3%83%AB-%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8-%E3%82%A2%E3%82%A4-%E3%83%91%E3%83%AC%E3%83%83%E3%83%88-(%E6%95%B0%E9%87%8F%E9%99%90%E5%AE%9A%E8%89%B2%E3%83%BB%E6%97%A2%E5%AD%98%E8%89%B2)-%E9%AE%AE%E3%82%84%E3%81%8B%E3%81%AA%E7%99%BA%E8%89%B2%E3%81%A7%E6%A7%98%E3%80%85%E3%81%AA%E8%B3%AA%E6%84%9F%E3%82%92%E6%A5%BD%E3%81%97%E3%82%81%E3%82%8B%E3%83%97%E3%83%A9%E3%82%A4%E3%83%9E%E3%83%BC%E3%80%81%E3%82%A2%E3%82%A4%E3%82%B7%E3%83%A3%E3%83%89%E3%82%A6%E3%80%81%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%88%E3%80%81%E3%83%A9%E3%82%A4%E3%83%8A%E3%83%BC%E3%81%8C%E5%85%A5%E3%81%A3%E3%81%9F%E3%82%A2%E3%82%A4-%E3%83%91%E3%83%AC%E3%83%83%E3%83%88',
            product_explain_text: 'ナチュラルから大胆なルックまで、様々なプロのアイ メイクを完成させるディオール バックステージ アイ パレット。 熱気溢れるディオールのバックステージからインスピレーションを得た、メイクアップ アーティストの必須アイテムを集めたパレットには、プライマー、シェードによってマット・パーリー・メタリックの仕上がりのアイシャドウ、ハイライト、ライナーが配置されています。 どんなスキントーンにもマッチするシェードを配色。重ねやすいテクスチャーで、美しい眼差しが完成します。 ディオール バックステージのブラシで塗布するとより美しい仕上がりに。アイシャドウにはバックステージ アイシャドウ シェード ブラシ、バックステージ アイシャドウ ブレンド ブラシ S、バックステージ アイシャドウ ブレンド ブラシ L。アイライナーにはバックステージ アイライナー ブラシをご使用ください。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article8 = await prisma.article.create({
        data:{
            product_image_path: '191115bt_exb24_1.jpg',
            product_name: 'スキニーリッチシャドウ',
            product_price: 1650,
            official_link:'https://meeco.mistore.jp/variety/product/7880900000000000000001238144.html?utm_source=yahoo&utm_medium=cpc&utm_campaign=DAS01_DAS&utm_content=DAS01_DAS&me-cid=yss_s05_00001&yclid=YSS.1001120434.EAIaIQobChMI_M-a-orp-QIVxsKWCh3kdwBmEAAYASAAEgL1M_D_BwE',
            product_explain_text: 'しっとりリッチな密着感。肌なじみの良いグラデアイシャドウ。重ねるだけで 、リッチなグラデーションが完成！ 【商品特徴】 ・しっとりとリッチな質感なのに、するする伸びてまぶたと一体化するように密着。粉飛びもしにくく、使いやすさもあり。 ・上品な輝きの微細パール＋ゴールドカラーパールを贅沢に配合。ギラつき過ぎない 、大人のツヤ感。 ・スクワラン（保湿）配合で目もとの乾燥を防ぐ。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article9 = await prisma.article.create({
        data:{
            product_image_path: '220323bt_exb01_1.jpg',
            product_name: 'グリームオンフィットシャドウ',
            product_price: 1320,
            official_link:'https://meeco.mistore.jp/variety/product/7880900000000000000001985345.html',
            product_explain_text: 'なめらかな質感と繊細なツヤめき。 高密着なスティックアイシャドウ。 ・ウォータープルーフ＆スマッジプルーフ処方 ・18時間仕上がり持続テスト済み※1 ・セラミド※2、スクワラン配合（すべて保湿） ・GF01 フラワーベース：柔らかな佇まいのヌードピンク ・GF02 エッグカップ：眩い日差しを感じるコーラルオレンジ ・GF03 ドリームキャッチャー：澄んだ輝きを添えるピンクラベンダー ・GF04 チェダーディップ：アイコニックなカッパーゴールド ・GF05 ウッドトイ：ナチュラルな温もりのベージュブラウン ・GF06 ワイングラス：しなやかで芳醇なブラウンレッド ※1：当社調べ。仕上がりには個人差があります ※2：セラミドNP',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article10 = await prisma.article.create({
        data:{
            product_image_path: 'mac_sku_MT1331_1x1_0.jpg',
            product_name: 'ミネラライズ スキンフィニッシュ',
            product_price: 1320,
            official_link:'https://www.maccosmetics.jp/product/20158/30735/makeup/mineralize-skinfinish?utm_medium=paid_search_brand&utm_source=yahoo&utm_campaign=brandname_site-conversion&utm_content=other_always-on_ak-in&utm_term=online-_-vp&itpacid=1060006&yclid=YSS.1001005438.EAIaIQobChMIt-Xhu7Hp-QIVknZgCh2i4geGEAAYASAAEgKzwfD_BwE',
            product_explain_text: '水のような輝きを纏う、滑らかな付け心地のフェイスパウダー。ハイライト効果のあるシェードやチークカラーとしても使用できる色合いをラインアップ。ライトスカペードは特に人気のシェードです',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 

    const article11 = await prisma.article.create({
        data:{
            product_image_path: 'B424328-SCE009-01.jpg',
            product_name: 'シグニチャー カラー アイズ',
            product_price: 7700,
            official_link:'https://onlineshop.suqqu.com/ja/%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC/%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%A1%E3%82%A4%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97/%E3%82%A2%E3%82%A4%E3%82%BA/%E3%82%B7%E3%82%B0%E3%83%8B%E3%83%81%E3%83%A3%E3%83%BC-%E3%82%AB%E3%83%A9%E3%83%BC-%E3%82%A2%E3%82%A4%E3%82%BA-%EF%BC%882022-%E7%A7%8B%E5%86%AC-%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%89/p/424328',
            product_explain_text: '色彩豊かな秋の情景をパレットに。 コクのある発色、豊かな輝きで目元を染める。 朝夕の風に秋の深まりを感じる頃、山肌は燦爛と輝き出す。 鮮やかな色彩に染め上げられた秋の風景を上質な質感と光、深いコクのある色で表現。 SUQQUのアイシャドウ パレットがドラマティックに秋を彩ります。',
            article_categories: {
                create: [
                    {
                        category: {
                            connect: {
                                category_name: 'イエローベース',
                            }
                        }
                    }
                ],
            },
        },
    }); 
}








main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });