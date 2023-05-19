import Content from "../template/content";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import Form from "./Form";
import NotFound from "../template/NotFound";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import { displayType, useTransaction } from "@/hooks/useTransition";
import { DateSelect } from "../template/DateSelected";
import { transitionEmpty } from "@/logic/core/interface/TypeTransition";
import Grid from "./Grid";

export default function Finance() {
  const {
    displayType,
    setDisplayType,
    transitions,
    setTransition,
    transition,
    save,
    deleted,
    user,
    date,
    setDate,
  } = useTransaction()

  function renderButtons() {
    return (
      <div className="flex justify-between">
        <DateSelect date={date} changeDate={setDate} />


        <div className="flex gap-5">
          <Button
            className="bg-gray-500 mobile-search  "
            leftIcon={<IconPlus />}
            onClick={() => setTransition(transitionEmpty)}
          >
            Nova Transação
          </Button>
        </div>

      </div>
    )
  }

  function renderDisplay() {
    return displayType === 'list' ? (
      <List transitions={transitions} selectTransitions={setTransition} />
    ) : (
      <Grid transactions={transitions} selectTransaction={setTransition} />
    )
  }

  return (
    <Page>

      <Header />
      <Content className="gap-5">

        {renderButtons()}
        <div>
          <SegmentedControl
            data={[
              { label: <IconList />, value: 'list' },
              { label: <IconLayoutGrid />, value: 'grid' },
            ]}
            onChange={(type) => setDisplayType(type as displayType)}
          />
        </div>
        {transition ? (

          <Form
            transition={transition}
            cancel={() => setTransition(null)}
            save={save}
            delete={deleted}
          />

        ) : transitions.length > 0 ? (
          renderDisplay()

        ) : (

          <NotFound>
            Nenhuma transação encontrada
          </NotFound>
        )}


      </Content>
      <style jsx>
        {`
             @media screen and (max-width: 390px) {
              .mobile-search {
               margin-left: 3px;
               background-color: red;
              }
             }
        
            `}
      </style>
    </Page>


  )
}