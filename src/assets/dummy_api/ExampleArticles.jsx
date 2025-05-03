/***
 * Dummy data for the articles.
 */

import { DummyHeading, DummySubtitle } from "../dummy_text/LoremIpsum"
import articleImage1 from '../images/pmi_article1.png'
import articleImage2 from '../images/pmi_article2.png'
import articleImage3 from '../images/pmi_article3.png'

const ExampleArticles = [
  {
    id: 1,
    title: <DummyHeading />,
    summary: <DummySubtitle />,
    news_writer_username: 'John Doe',
    updated_at: '2021-01-01',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tortor venenatis, pellentesque velit non, facilisis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam interdum enim non ipsum pulvinar, quis semper felis dictum. Nullam posuere magna purus. Integer eget mauris vitae augue finibus euismod facilisis ut massa. Proin in risus eu ante mollis malesuada. Phasellus porta, felis eu sodales maximus, magna sem lobortis nibh, et dictum risus est eu risus. Duis non efficitur nisl. Nunc in odio in massa suscipit gravida. Praesent ultricies erat id ligula porta, accumsan auctor est cursus. Phasellus sit amet semper lacus.
    Maecenas in nulla ut ante hendrerit consectetur. Duis sodales enim urna, a pretium dolor condimentum in. In auctor turpis ac luctus scelerisque. Maecenas facilisis, mauris sed fringilla hendrerit, eros diam hendrerit felis, non hendrerit erat nunc et dui. Sed pharetra magna eget velit sodales vehicula. Pellentesque tristique dui dolor, vitae ullamcorper risus blandit et. Ut fringilla, urna vel sagittis sollicitudin, neque ipsum convallis enim, ut finibus erat felis sit amet arcu. Sed ante tortor, laoreet id ligula vel, finibus pellentesque sapien. Cras et diam velit. Nam semper nibh velit, non ultricies nulla rutrum sed. Pellentesque luctus egestas nisl sed fringilla.
    Vivamus accumsan enim et purus elementum, a scelerisque lacus suscipit. Suspendisse potenti. Ut nec luctus felis. Ut fringilla bibendum lorem nec venenatis. Proin lectus odio, efficitur ut dolor eget, tincidunt tristique lectus. Quisque consectetur dui sit amet massa faucibus, ac malesuada enim vestibulum. Nunc facilisis sit amet eros a interdum.`,
    cover_image: articleImage1
  },
  {
    id: 2,
    title: <DummyHeading />,
    summary: <DummySubtitle />,
    news_writer_username: 'Author 2',
    updated_at: '2021-02-01',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tortor venenatis, pellentesque velit non, facilisis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam interdum enim non ipsum pulvinar, quis semper felis dictum. Nullam posuere magna purus. Integer eget mauris vitae augue finibus euismod facilisis ut massa. Proin in risus eu ante mollis malesuada. Phasellus porta, felis eu sodales maximus, magna sem lobortis nibh, et dictum risus est eu risus. Duis non efficitur nisl. Nunc in odio in massa suscipit gravida. Praesent ultricies erat id ligula porta, accumsan auctor est cursus. Phasellus sit amet semper lacus.
    Maecenas in nulla ut ante hendrerit consectetur. Duis sodales enim urna, a pretium dolor condimentum in. In auctor turpis ac luctus scelerisque. Maecenas facilisis, mauris sed fringilla hendrerit, eros diam hendrerit felis, non hendrerit erat nunc et dui. Sed pharetra magna eget velit sodales vehicula. Pellentesque tristique dui dolor, vitae ullamcorper risus blandit et. Ut fringilla, urna vel sagittis sollicitudin, neque ipsum convallis enim, ut finibus erat felis sit amet arcu. Sed ante tortor, laoreet id ligula vel, finibus pellentesque sapien. Cras et diam velit. Nam semper nibh velit, non ultricies nulla rutrum sed. Pellentesque luctus egestas nisl sed fringilla.
    Vivamus accumsan enim et purus elementum, a scelerisque lacus suscipit. Suspendisse potenti. Ut nec luctus felis. Ut fringilla bibendum lorem nec venenatis. Proin lectus odio, efficitur ut dolor eget, tincidunt tristique lectus. Quisque consectetur dui sit amet massa faucibus, ac malesuada enim vestibulum. Nunc facilisis sit amet eros a interdum.`,
    cover_image: articleImage2
  },
  {
    id: 3,
    title: <DummyHeading />,
    summary: <DummySubtitle />,
    news_writer_username: 'Author 3',
    updated_at: '2021-03-01',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tortor venenatis, pellentesque velit non, facilisis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam interdum enim non ipsum pulvinar, quis semper felis dictum. Nullam posuere magna purus. Integer eget mauris vitae augue finibus euismod facilisis ut massa. Proin in risus eu ante mollis malesuada. Phasellus porta, felis eu sodales maximus, magna sem lobortis nibh, et dictum risus est eu risus. Duis non efficitur nisl. Nunc in odio in massa suscipit gravida. Praesent ultricies erat id ligula porta, accumsan auctor est cursus. Phasellus sit amet semper lacus.
    Maecenas in nulla ut ante hendrerit consectetur. Duis sodales enim urna, a pretium dolor condimentum in. In auctor turpis ac luctus scelerisque. Maecenas facilisis, mauris sed fringilla hendrerit, eros diam hendrerit felis, non hendrerit erat nunc et dui. Sed pharetra magna eget velit sodales vehicula. Pellentesque tristique dui dolor, vitae ullamcorper risus blandit et. Ut fringilla, urna vel sagittis sollicitudin, neque ipsum convallis enim, ut finibus erat felis sit amet arcu. Sed ante tortor, laoreet id ligula vel, finibus pellentesque sapien. Cras et diam velit. Nam semper nibh velit, non ultricies nulla rutrum sed. Pellentesque luctus egestas nisl sed fringilla.
    Vivamus accumsan enim et purus elementum, a scelerisque lacus suscipit. Suspendisse potenti. Ut nec luctus felis. Ut fringilla bibendum lorem nec venenatis. Proin lectus odio, efficitur ut dolor eget, tincidunt tristique lectus. Quisque consectetur dui sit amet massa faucibus, ac malesuada enim vestibulum. Nunc facilisis sit amet eros a interdum.`,
    cover_image: articleImage3
  }
]

export default ExampleArticles