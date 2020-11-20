import {SectionNav} from './sectionNav.js';
import styles from "./bookInfos.module.css";
import React from 'react';


//   <div class="bd">
//     <div class="slide-block">
//       <ul class="col slide-list">
//         <li class="slide-item info-block">
//           <a href="https://book.douban.com/review/12941655/">
//             <div
//               class="cover"
//               style="background-image: url(https://img1.doubanio.com/view/subject/l/public/s33705199.jpg)"
//             ></div>
//             <div class="content">
//               <span class="title">我完成我以完成你</span>
//               <span class="meta">乐府文化</span>
//               <p class="abstract">
//                 文：郭初阳 成为语文老师纯属偶然。
//                 小学的时候我拔尖的是数学，那会儿有珠算课，上学放学除了书包还要带一个算盘，用一根带子串起两头，斜跨在肩上颇为威风，仿佛一杆冲锋枪——我的算盘打得飞快，从一开始，加...
//               </p>
//             </div>
//           </a>
//         </li>
//         <li class="slide-item info-block">
//           <a href="https://www.douban.com/note/782324414/">
//             <div
//               class="cover"
//               style="background-image: url(https://img2.doubanio.com/view/note/l/public/p77142173.webp)"
//             ></div>
//             <div class="content">
//               <span class="title">
//                 2020年第三届宝珀理想国文学奖揭晓
//                 青年作家双雪涛以《猎人》摘得首奖
//               </span>
//               <span class="meta">理想国</span>
//               <p class="abstract">
//                 2020年10月28日，第三届宝珀理想国文学奖在京盛大揭晓。青年作家双雪涛以作品《猎人》摘得首奖。这一奖项由当代顶级腕表中最具创新能力的瑞士品牌宝珀BLANCPAIN与中国最具影响力的出版品牌理想国联合发起，旨在创...
//               </p>
//             </div>
//           </a>
//         </li>
//         <li class="slide-item info-block">
//           <a href="https://book.douban.com/review/12928567/">
//             <div
//               class="cover"
//               style="background-image: url(https://img9.doubanio.com/view/subject/l/public/s33735236.jpg)"
//             ></div>
//             <div class="content">
//               <span class="title">你愿意和小花旦一起寻找海宝吗？</span>
//               <span class="meta">理想国</span>
//               <p class="abstract">
//                 王占黑带着成长之作《小花旦》来了。这一次，占黑小伙走出街道，从上一辈民间爷叔的生活走向自己的同龄人，也走向城市深处每个普通人内心的秘密森林。
//                 “小花旦”之名，源于一个粗糙的自我发问：性少数者在工人群...
//               </p>
//             </div>
//           </a>
//         </li>
//         <li class="slide-item info-block">
//           <a href="https://book.douban.com/review/12936071/">
//             <div
//               class="cover"
//               style="background-image: url(https://img9.doubanio.com/view/subject/l/public/s33734074.jpg)"
//             ></div>
//             <div class="content">
//               <span class="title">哲思与海：爱、死亡与海洋的“流浪”之旅</span>
//               <span class="meta">未读</span>
//               <p class="abstract">
//                 无论前途后路，不必去看 任由自己沉溺在摇篮中 如同摇曳在海上的扁舟
//                 ——荷尔德林 人类迷恋又恐惧海洋，特别是来自内陆的人。
//                 德国诗人荷尔德林出生在一个内陆国家，直到1801年12月，在前往法国波尔多的途中，他...
//               </p>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>

const infoContent = <div className={styles.infoContent}>
  <a href="https://book.douban.com/review/12941655/">
    <div
      className="cover"
    //   style="background-image: url(https://img1.doubanio.com/view/subject/l/public/s33705199.jpg)"
    ></div>
    <div className={styles.content}>
      <span className={styles.title}>我完成我以完成你</span>
      <span className="meta">乐府文化</span>
      <p className="abstract">
        文：郭初阳 成为语文老师纯属偶然。
        小学的时候我拔尖的是数学，那会儿有珠算课，上学放学除了书包还要带一个算盘，用一根带子串起两头，斜跨在肩上颇为威风，仿佛一杆冲锋枪——我的算盘打得飞快，从一开始，加...
      </p>
    </div>
  </a>
</div>;


export const BooksInfo = (props) => (
    <div className={styles.section}>
      <SectionNav title="图书资讯" slide/>
      {infoContent}
    </div>
  );