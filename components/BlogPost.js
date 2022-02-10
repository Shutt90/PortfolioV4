import { motion } from 'framer-motion';
import React from 'react';
import styles from '/styles/blogpost.module.css'

const blogVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
    }
  }, whileHover: {
    scale: 1.2,
    x: -10000,
    transition: {
      x: { duration: 1000, ease: 'linear'}
    }
  },
}

function BlogPost() {
  return (
    <motion.div
    variants={blogVariants}
    className={styles.row}
    initial="hidden"
    animate="visible"
    whileHover="whileHover"
    whileFocus="whileFocus"
    >
        <h1 className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis. Lacus vestibulum sed arcu non odio euismod lacinia at. Quis commodo odio aenean sed adipiscing diam. Enim blandit volutpat maecenas volutpat blandit aliquam. Purus in massa tempor nec feugiat nisl. Consectetur adipiscing elit ut aliquam purus. Tortor pretium viverra suspendisse potenti. Sed euismod nisi porta lorem mollis aliquam ut. Risus quis varius quam quisque id diam vel quam elementum. Suspendisse sed nisi lacus sed viverra tellus in. Egestas dui id ornare arcu. Cras sed felis eget velit aliquet sagittis id consectetur. Facilisis volutpat est velit egestas. Purus sit amet volutpat consequat mauris nunc congue.

Sapien nec sagittis aliquam malesuada bibendum. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Accumsan sit amet nulla facilisi morbi tempus iaculis. Leo vel orci porta non. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Massa sed elementum tempus egestas sed sed. Curabitur gravida arcu ac tortor dignissim convallis aenean. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Proin sed libero enim sed faucibus turpis in eu. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nunc vel risus commodo viverra. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Amet consectetur adipiscing elit ut aliquam. Suspendisse potenti nullam ac tortor. At elementum eu facilisis sed. Ultricies integer quis auctor elit sed. At augue eget arcu dictum varius.

Et netus et malesuada fames ac turpis egestas sed. Duis at consectetur lorem donec. Tristique senectus et netus et malesuada fames. Morbi quis commodo odio aenean sed. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nulla pharetra diam sit amet nisl suscipit adipiscing. Felis donec et odio pellentesque diam volutpat commodo. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Magna fringilla urna porttitor rhoncus dolor purus non enim.

Urna et pharetra pharetra massa. Est sit amet facilisis magna etiam tempor orci. Luctus accumsan tortor posuere ac ut consequat semper. Arcu odio ut sem nulla pharetra diam sit amet nisl. Purus sit amet luctus venenatis lectus magna fringilla. Urna cursus eget nunc scelerisque. In ornare quam viverra orci sagittis eu volutpat odio. A diam sollicitudin tempor id eu. Lacus luctus accumsan tortor posuere ac. Praesent semper feugiat nibh sed pulvinar. Arcu vitae elementum curabitur vitae nunc sed. Ut lectus arcu bibendum at varius. Dignissim suspendisse in est ante in nibh mauris cursus. Ipsum dolor sit amet consectetur. Aliquam purus sit amet luctus venenatis lectus magna.

Dictum non consectetur a erat nam at lectus. Purus in mollis nunc sed id semper risus in hendrerit. Ut ornare lectus sit amet est placerat in egestas erat. Ornare suspendisse sed nisi lacus. A cras semper auctor neque vitae tempus quam pellentesque. Faucibus nisl tincidunt eget nullam. Leo a diam sollicitudin tempor id eu nisl. Sit amet porttitor eget dolor. Ut venenatis tellus in metus vulputate eu scelerisque. Aliquet eget sit amet tellus cras adipiscing. Mi sit amet mauris commodo quis imperdiet. Posuere urna nec tincidunt praesent semper.

Quisque egestas diam in arcu cursus euismod. Purus sit amet luctus venenatis. Id venenatis a condimentum vitae sapien pellentesque habitant. Praesent tristique magna sit amet purus gravida quis. Tristique magna sit amet purus gravida. Dictum sit amet justo donec enim. Volutpat est velit egestas dui id ornare arcu. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Ultrices gravida dictum fusce ut placerat. Ut etiam sit amet nisl purus in. Egestas egestas fringilla phasellus faucibus scelerisque. Turpis massa tincidunt dui ut. Nisi scelerisque eu ultrices vitae. Porttitor leo a diam sollicitudin tempor id eu nisl. Aliquet porttitor lacus luctus accumsan tortor. Tortor pretium viverra suspendisse potenti. Sed pulvinar proin gravida hendrerit.

Sem integer vitae justo eget. Dictumst vestibulum rhoncus est pellentesque elit. Eget aliquet nibh praesent tristique magna. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ut porttitor leo a diam sollicitudin. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Facilisi etiam dignissim diam quis enim lobortis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Enim sed faucibus turpis in eu mi bibendum. In dictum non consectetur a erat. Turpis in eu mi bibendum neque egestas. Nulla aliquet enim tortor at. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Purus sit amet volutpat consequat mauris nunc congue. Scelerisque purus semper eget duis at tellus at. Rutrum quisque non tellus orci ac auctor. Nibh tellus molestie nunc non blandit. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus.

Convallis tellus id interdum velit laoreet. In nulla posuere sollicitudin aliquam. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Tortor vitae purus faucibus ornare suspendisse sed nisi. Tincidunt nunc pulvinar sapien et ligula. Pulvinar pellentesque habitant morbi tristique senectus. Eget lorem dolor sed viverra ipsum nunc. Id ornare arcu odio ut sem nulla pharetra. Sit amet purus gravida quis blandit turpis cursus in hac. Malesuada fames ac turpis egestas integer eget aliquet nibh. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt dui ut ornare lectus sit amet. Eu augue ut lectus arcu bibendum. Cursus in hac habitasse platea dictumst quisque sagittis purus.

Ultrices in iaculis nunc sed augue lacus viverra. Ultricies mi quis hendrerit dolor magna eget. Eu mi bibendum neque egestas. Enim ut sem viverra aliquet eget sit amet tellus cras. Scelerisque fermentum dui faucibus in ornare. Et malesuada fames ac turpis egestas integer eget aliquet. Nulla aliquet enim tortor at auctor urna. Donec enim diam vulputate ut pharetra sit. Urna duis convallis convallis tellus id interdum. Tellus molestie nunc non blandit massa enim nec. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Purus ut faucibus pulvinar elementum integer. Ut tellus elementum sagittis vitae et leo duis ut. Non consectetur a erat nam at lectus. Fames ac turpis egestas integer eget aliquet nibh praesent. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Suspendisse interdum consectetur libero id faucibus. Nec nam aliquam sem et tortor consequat id.

Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Vitae nunc sed velit dignissim sodales. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Morbi tristique senectus et netus et. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Lacus viverra vitae congue eu consequat ac. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Nunc sed id semper risus in hendrerit. Orci porta non pulvinar neque. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Velit ut tortor pretium viverra suspendisse. Libero volutpat sed cras ornare arcu dui vivamus.

Leo urna molestie at elementum eu facilisis sed odio. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Enim diam vulputate ut pharetra. Ultricies mi eget mauris pharetra. Et tortor at risus viverra. Facilisis leo vel fringilla est ullamcorper eget. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Nisi est sit amet facilisis magna etiam tempor orci. Gravida quis blandit turpis cursus in hac. Facilisis mauris sit amet massa vitae tortor. Sed faucibus turpis in eu mi bibendum neque egestas. Nunc vel risus commodo viverra maecenas accumsan. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Enim facilisis gravida neque convallis a. Lectus vestibulum mattis ullamcorper velit sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Feugiat nisl pretium fusce id velit ut tortor pretium viverra.

Leo duis ut diam quam nulla porttitor massa. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Viverra ipsum nunc aliquet bibendum enim facilisis. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Tortor id aliquet lectus proin nibh nisl condimentum id. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Feugiat pretium nibh ipsum consequat nisl vel pretium. Adipiscing enim eu turpis egestas pretium. Elit duis tristique sollicitudin nibh sit amet commodo. Vitae suscipit tellus mauris a.

Sodales ut eu sem integer vitae justo eget magna. Risus feugiat in ante metus dictum. Pellentesque sit amet porttitor eget. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Magna ac placerat vestibulum lectus. Enim lobortis scelerisque fermentum dui faucibus in. Cras fermentum odio eu feugiat pretium nibh ipsum. Nam at lectus urna duis convallis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.

A diam maecenas sed enim ut sem viverra aliquet. Quam pellentesque nec nam aliquam sem. Dolor morbi non arcu risus quis. In pellentesque massa placerat duis ultricies. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Massa vitae tortor condimentum lacinia quis. Amet consectetur adipiscing elit duis tristique. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Quam vulputate dignissim suspendisse in est. Pellentesque nec nam aliquam sem et. Fusce ut placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Feugiat in ante metus dictum at tempor commodo ullamcorper. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus dolor purus. Sit amet aliquam id diam maecenas ultricies mi eget mauris.

Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Nunc eget lorem dolor sed viverra ipsum nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Adipiscing tristique risus nec feugiat. Ultrices eros in cursus turpis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Ac tincidunt vitae semper quis lectus nulla at volutpat. Fames ac turpis egestas integer. At tempor commodo ullamcorper a lacus vestibulum sed. Purus semper eget duis at tellus at urna condimentum mattis. At auctor urna nunc id cursus metus aliquam eleifend mi. Ut diam quam nulla porttitor massa id neque. Sed augue lacus viverra vitae congue eu consequat.</h1> 
    </motion.div>
    );
}

export default BlogPost;
