import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();
  // SELECTED IMAGE URL STATE
  const [urlImg, setUrlImg] = useState('');

  // FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setUrlImg(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={40}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {urlImg && (
        <ModalViewImage isOpen={isOpen} imgUrl={urlImg} onClose={onClose} />
      )}
    </>
  );
}
