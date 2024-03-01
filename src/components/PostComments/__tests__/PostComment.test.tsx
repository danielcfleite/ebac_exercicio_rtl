import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe('Testes para o componente PostComment', ()=>{
    test('Deve renderizar o comentário corretamente',()=>{
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
              value: 'muito bacana'
            }
          })
          fireEvent.click(screen.getByTestId('btn-comentario'))
          fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
              value: 'comprou aonde?'
            }
          })
          fireEvent.click(screen.getByTestId('btn-comentario'))
          
          expect(screen.getByText('muito bacana')).toBeInTheDocument();
          expect(screen.getByText('comprou aonde?')).toBeInTheDocument();
    })
})