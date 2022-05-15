import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, deleteEvent } from 'app/features/events';

import { Button, Col, Image, Modal, PageHeader, Row } from 'antd';
import { Main, Block, BlockBody, BlockFooter, BlockName, BlockTitle } from '../styled';


import EditEventModal from 'components/events/EditEvent';
import ViewEventModal from 'components/events/ViewEvent';
import CreateEventModal from 'components/events/CreateEvent';

const Events = () => {
    const dispatch = useDispatch();
    const eventsEntity = useSelector(state => state.events);
    const { events } = eventsEntity;
    const [AllEvents] = useState([])

    const [ViewEvent, setViewEvent] = useState(false);
    const [CreateEvent, setCreateEvent] = useState(false);
    const [EditEvent, setEditEvent] = useState(false);
    const [event, setEvent] = useState([]);

    useEffect(() => {
      dispatch(getEvents());
    }, [dispatch]);

    const handleViewEvent = id => {
      setViewEvent(true);
      const findOne = events.filter(res => res.eventId === id);
      setEvent(findOne[0]);
    };

    const handleEditEvent = id => {
      setEditEvent(true);
      const findOne = events.filter(res => res.eventId === id);
      setEvent(findOne[0]);
    };

    return (
      <>
        <PageHeader title="Events" className="heading">
          <Button type="primary" size="large" onClick={() => setCreateEvent(true)}>
            + Add Event
          </Button>
        </PageHeader>

        <Main>
          <Row gutter={25}>
            {AllEvents.concat(events).map((eve, index )=> (
              <Col xxl={6} lg={8} md={12} className="block-col" key={index}>
                <Block>
                  <Image preview={false} src={eve.eventMediaUrl} />
                  <BlockBody>
                    <BlockName>{eve.category}</BlockName>
                    <BlockTitle>{eve.title}</BlockTitle>
                    {/* <BlockText>{article.shortDescription}</BlockText> */}
                  </BlockBody>
                  <BlockFooter>
                    <Button type="primary" onClick={() => handleEditEvent(eve.eventId)}>
                      Edit
                    </Button>
                    <Button type="link" onClick={() => handleViewEvent(eve.eventId)}>
                      View
                    </Button>
                    <Button type="danger" className="delete" onClick={() => dispatch(deleteEvent(eve.eventId))}>
                      Delete
                    </Button>
                  </BlockFooter>
                </Block>
              </Col>
            ))}

            <Modal
              onCancel={() => setViewEvent(false)}
              visible={ViewEvent}
              width={700}
              bodyStyle={{ padding: '40px' }}
              onOk={() => setViewEvent(false)}
            >
              <ViewEventModal event={event} />
            </Modal>
            <Modal
              onCancel={() => setCreateEvent(false)}
              visible={CreateEvent}
              width={700}
              bodyStyle={{ padding: '40px' }}
              onOk={() => setCreateEvent(false)}
            >
              <CreateEventModal />
            </Modal>

            <Modal
              onCancel={() => setEditEvent(false)}
              visible={EditEvent}
              width={600}
              bodyStyle={{ padding: '40px' }}
              className="job-modal"
              onOk={() => setEditEvent(false)}
            >
              <EditEventModal event={event} />
            </Modal>
          </Row>
        </Main>
      </>
    );
}

export default Events;
