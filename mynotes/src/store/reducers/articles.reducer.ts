import { Reducer } from 'redux';
import { Actions, ArticlesStoreActions } from '../actions/articles.action';

export interface Article {
   id: number;
   type: string;
   title: string;
   author: string;
   description: string;
   link: string;
   imageLink: string;
}

export interface ArticlesList {
   articlesList: Article[];
}

export const articlesListInitialState: ArticlesList = {
   articlesList: [
      {
         id: 1,
         type: 'article',
         title: 'Antyhacking w pigułce.',
         author: 'sekurak',
         description:
            'Antyhacking w pigułce. Częste ataki na polskich internautów/firmy oraz jak się przed tym ochronić? (22.06.2021)',
         link:
            'https://sekurak.pl/antyhacking-w-pigulce-czeste-ataki-na-polskich-internautow-firmy-oraz-jak-sie-przed-tym-ochronic-22-06-2021/',
         imageLink: 'https://sekurak.pl/wp-content/uploads/2021/01/webhack-150x150.jpg',
      },
      {
         id: 2,
         type: 'article',
         title: 'Jak dostać się do danych zabezpieczonych BitLockerem?',
         author: 'sekurak',
         description:
            'Wieczny brak czasu na aktualizacje systemowe? W końcu udało się znaleźć chwilę na ich zainstalowanie, ale nie dokończyłeś całego procesu, bo musiałeś wybiec z biura? Czy twoje dane są bezpieczne? Tego dowiesz się z niniejszego artykułu.',
         link:
            'https://sekurak.pl/jak-dostac-sie-do-danych-zabezpieczonych-bitlockerem-zrob-sobie-aktualizacje-systemowa/',
         imageLink: 'https://sekurak.pl/wp-content/uploads/2021/05/locker1-150x150.png',
      },
      {
         id: 3,
         type: 'article',
         title:
            'Dlaczego hackowanie aplikacji webowych jest proste? (i jak jemu zapobiec). Programiści / testerzy -> bezpłatne wejście na nasze turbo-szkolenie',
         author: 'sekurak',
         description:
            'Jeśli w Twojej firmie pracuje co najmniej 20 programistów i/lub testerów – poproś kogoś z działu HR o napisanie o nas e-maila na adres ca@securitum.pl. W odpowiedzi prześlemy kod rabatowy umożliwiający bezpłatne zapisanie się na szkolenie z tego postu. Kod będzie mógł użyć każdy z zainteresowanych pracowników (nie limitujemy liczby osób). Zgłoszenia przyjmujemy do końca 23.05.2021r.',
         link:
            'https://sekurak.pl/dlaczego-hackowanie-aplikacji-webowych-jest-proste-i-jak-jemu-zapobiec-programisci-testerzy-bezplatne-wejscie-na-nasze-turbo-szkolenie/',
         imageLink: 'https://sekurak.pl/wp-content/uploads/2020/12/AdobeStock_245125119-150x150.jpeg',
      },
      {
         id: 4,
         type: 'article',
         title:
            'Niewidzialny w Internecie: chroń się przed śledzeniem, nękaniem i kradzieżą swoich danych. Nowe szkolenie od sekuraka',
         author: 'sekurak',
         description:
            'Zastanawialiście się ile śladów o sobie zostawiacie podczas standardowego przeglądania Internetu? Zakupy, poczta elektroniczna, „zwykłe” przeglądanie sieci – takie czynności nie są całkowicie neutralne dla naszej prywatności… Obawiasz się, że dane które można pozyskać o Tobie mogą być użyte do spamu, nękania, śledzenia (również Twojej rodziny) czy kradzieży pieniędzy z konta? Jeśli prywatność jest dla Ciebie istotna bądź trapią Cię tego typu pytania – to szkolenie jest dla Ciebie. ',
         link:
            'https://sekurak.pl/niewidzialny-w-internecie-chron-sie-przed-sledzeniem-nekaniem-i-kradzieza-swoich-danych-nowe-szkolenie-od-sekuraka/',
         imageLink: 'https://sekurak.pl/wp-content/uploads/2021/05/anon1-150x150.jpg',
      },
      {
         id: 5,
         type: 'article',
         title: 'Chciałbyś pracować w Sekuraku / Securitum? Mamy dla Was aż trzy różne stanowiska:',
         author: 'sekurak',
         description:
            'W Securitum mamy już niemal 40 osób, w 2020 roku zrealizowaliśmy grubo ponad 400 testów penetracyjnych (~audytów bezpieczeństwa) oraz przeszkoliliśmy tysiące osób. Cały czas się mocno rozwijamy i poszukujemy osób aż na 3 różne stanowiska:',
         link:
            'https://sekurak.pl/chcialbys-pracowac-w-sekuraku-securitum-mamy-dla-was-az-trzy-rozne-stanowiska/',
         imageLink: 'https://sekurak.pl/wp-content/uploads/2020/03/hack111-150x150.png',
      },
   ],
};

export const articlesStoreReducer: Reducer<ArticlesList, Actions> = (
   state: ArticlesList = articlesListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case ArticlesStoreActions.SET_NEW_ARTICLE:
         const id = state.articlesList.reverse()[0].id + 1;
         const toAdd = actions.payload.article;
         toAdd.id = id;
         return {
            ...state,
            articlesList: [...state.articlesList, toAdd],
         };

      case ArticlesStoreActions.SET_UPDATE_ARTICLE:
         return {
            ...state,
            articlesList: state.articlesList.map((item) =>
               item.id === actions.payload.article.id
                  ? {
                       ...item,
                       id: actions.payload.article.id,
                       type: actions.payload.article.type,
                       title: actions.payload.article.title,
                       author: actions.payload.article.author,
                       description: actions.payload.article.description,
                       link: actions.payload.article.link,
                       imageLink: actions.payload.article.imageLink,
                    }
                  : item,
            ),
         };

      case ArticlesStoreActions.SET_DELETE_ARTICLE:
         return {
            ...state,
            articlesList: state.articlesList.filter((el) => el.id !== actions.payload.article.id),
         };

      default:
         return state;
   }
};
