PYHDL_IF_WEB_ROOT := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

ifeq (,$(PACKAGES_DIR))
  PACKAGES_DIR:=$(PYHDL_IF_WEB_ROOT)/packages
endif

all : main
	rm -rf web/doc
	mkdir -p web/doc
#	cd web/doc ; PACKAGES_DIR=$(PACKAGES_DIR) \
#		$(MAKE) -f $(PACKAGES_DIR)/tblink-rpc-docs/Makefile html
#	cp -r web/doc/build/html web/doc/html
#	rm -rf web/doc/build web/doc/doxydocs
	touch web/.nojekyll

main :
	rm -rf web
	jekyll build -d web

serve :
	jekyll serve -d web
		


clean :
	rm -rf web
