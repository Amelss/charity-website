import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>From Scratch | Home</title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus esse consectetur ipsam incidunt voluptate hic. Consectetur expedita, exercitationem deserunt doloremque obcaecati quia animi excepturi soluta error autem, corporis beatae odit fugit mollitia possimus sint voluptate, odio neque quod quo? Aliquid voluptatem odit facilis dicta accusantium ducimus laudantium rerum animi cupiditate beatae? Eaque assumenda suscipit odio dicta repudiandae eos deleniti minima optio consequuntur nostrum saepe numquam quas quos facilis officiis quam vitae, illum, mollitia accusantium dolores praesentium dolore provident! Sit aspernatur ad vel numquam. Voluptas incidunt quae quisquam ad, dolor saepe in, ex ipsa nobis quaerat fugiat nihil veritatis magni earum dicta provident? Corporis sed numquam praesentium eaque non doloribus ipsam porro exercitationem ullam sit earum voluptatem, labore animi a minima dicta similique quam repudiandae, cupiditate fugiat eum odit nemo. Libero nulla at quaerat obcaecati ad laboriosam amet magni laudantium, deserunt repellendus maxime, sint numquam est, illum dolore aperiam? Alias aperiam nisi delectus maiores, eaque obcaecati, quo voluptatem, numquam ratione iste non molestias esse tempora laboriosam quisquam corrupti sequi. Quibusdam totam sequi repellendus? Corporis mollitia enim debitis omnis aspernatur quasi minima earum quod quidem numquam consequatur tenetur facere laborum illo magni ex voluptatum odit exercitationem, sit accusantium modi inventore quo. Voluptate in dolorem adipisci officiis. Et placeat explicabo totam quia impedit ea voluptas, ducimus praesentium similique corrupti vel dolore possimus ex deleniti alias, soluta itaque tempora. Dolores aliquam enim soluta incidunt! Vero cum magni ad consectetur! Adipisci at repellendus aliquam, nam fugiat quam consequuntur atque accusamus consequatur perspiciatis totam nulla numquam provident ratione voluptates, labore quas similique animi libero sint. Et saepe eaque neque optio accusantium, cupiditate exercitationem tenetur libero iure earum, sunt doloremque enim, qui odio distinctio facere? Blanditiis sunt, deleniti aperiam praesentium sit soluta! Laboriosam, repellendus maiores! Excepturi porro accusantium eos est veniam reprehenderit incidunt tempora vel rem.</p>
    </>
  );
}
