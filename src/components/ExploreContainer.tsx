import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <IonCardHeader>
        <div id="profile">
        <img src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/327207988_1583626385448198_3267979529570872045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-tbZcWIh3g1leCClrA3-E7RLfLIQ1xnntEt8shDXGeVkhViC4JjvRN6wWpqqTPLuVNHLJpOM-NFg85bzF8IDv&_nc_ohc=5R2m6JUESVcAX93Df0S&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfC2o_NF5kYrOcsjfyIjzzBJGcU6208m2f7mljWrJPQDJg&oe=65EDA3EF" alt="" />
        <IonCardTitle>Estrada, Marianne Gil </IonCardTitle>
        <IonCardSubtitle>This is my Sample application</IonCardSubtitle>
        </div>
      </IonCardHeader>

      <IonCardContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nobis voluptatem asperiores assumenda amet cum eius praesentium tenetur hic molestias minima numquam quod ratione eveniet omnis, laudantium distinctio ea labore iure aliquid repellat ullam sit? Aut et ex saepe voluptatibus optio mollitia, id voluptas nesciunt? Fugit quasi id reprehenderit aperiam asperiores totam veniam, quo qui natus necessitatibus nam soluta cupiditate delectus voluptatibus possimus, earum quisquam? A tempore temporibus explicabo quasi quaerat asperiores beatae voluptatem eius cum eos, excepturi animi labore doloremque, modi rem accusantium saepe porro ut, maxime provident ducimus. Nostrum, quidem optio in assumenda sint incidunt repellat laboriosam est?</IonCardContent>
    </IonCard>
  );
}
export default Example;