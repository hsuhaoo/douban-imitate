import styles from './tag.module.css';

const tagList = [
    { title: '\n                文学\n            ',
    tag_list: [ '小说', '随笔', '日本文学', '散文', '诗歌', '童话', '名著', '港台', '更多»' ] },
  { title: '\n                流行\n            ',
    tag_list: [ '漫画', '推理', '绘本', '青春', '科幻', '言情', '奇幻', '武侠', '更多»' ] },
  { title: '\n                文化\n            ',
    tag_list: [ '历史', '哲学', '传记', '设计', '建筑', '电影', '回忆录', '音乐', '更多»' ] },
  { title: '\n                生活\n            ',
    tag_list: [ '旅行', '励志', '教育', '职场', '美食', '灵修', '健康', '家居', '更多»' ] },
  { title: '\n                经管\n            ',
    tag_list: [ '经济学', '管理', '商业', '金融', '营销', '理财', '股票', '企业史', '更多»' ] },
  { title: '\n                科技\n            ',
    tag_list: [ '科普', '互联网', '编程', '交互设计', '算法', '通信', '神经网络', '更多»' ] }
];
const tagGroup = tagList.map((item) =>
    <div>
        <div>{item.title}</div>
        <div>{item.tag_list.map((tag)=><div>{tag}</div>)}</div>
    </div>);        
    
export const Tag = ()=>
    <div className={styles.tag}>
        {tagGroup}
    </div>