# NESTJS GRPC

- GENERATE PROTO FILE
  `protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto --experimental_allow_proto3_optional`
