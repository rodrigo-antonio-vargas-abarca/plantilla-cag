import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import CommonCardHeader from "@/components/common/CommonCardHeader";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Movimientos1Container = () => {
  const SampleData = [
    {
      text: "Prior to publishing content on social media",
    },
  ];

  return (
    <>
      <EncabezadoPagina titulo="Sample Page" parent="Sample Page" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Sample Card" span={SampleData} />
              <CardBody>
                <p>While written content continues to reign supreme as the cornerstone of every brand's digital marketing strategy, video and image-based content are becoming more and more prominent in the world of content marketing. The regular blog, social media posts, and a wide range of other written content formats are just a few examples.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movimientos1Container;
